import React, {useRef, useState, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import {BsFillTelephoneFill} from 'react-icons/bs'
gsap.registerPlugin(ScrollTrigger);
const contacts = () => {
  //Scroll animation
  const contacts = useRef(null);

  useEffect(() =>{
    const el = contacts.current;
    gsap.fromTo(el, {y:50, opacity: 0}, {y: 0, opacity: 1, duration: 1, scrollTrigger:{
      trigger: el
    }})
  }, [])

  //input validation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [message, setMessage] = useState('');

  //emailJS
  const form = useRef();
  
  const sendEmail = (e) => {
    const success = () => toast.success('Message sent!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const failed = () => toast.error('Error please try again.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });  
    const requirements = () => toast.error('Please fill up the required fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
      const requirementsInvalid = (where) => toast.error('Invalid ' + where +'. Please try again!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    e.preventDefault();
    if (name.length == 0 && email.length == 0 && phoneNumber.length == 0 && message.length == 0 ){
      requirements();
    } else if(name.length == 0){
      requirementsInvalid('name');
    }
    else if(email.length == 0){
      requirementsInvalid('email address');
    }
    else if(phoneNumber.length == 0){
      requirementsInvalid('phone number');
    }
    else if(message.length == 0){
      requirementsInvalid('message');
    }else {
      emailjs.sendForm('service_h53hsbv', 'template_2wsgejr', form.current, '55VfGu7c3pQDEh_no')
      .then((result) => {
          console.log(result.text);
          success();
      }, (error) => {
          console.log(error.text);
          failed();
      });
    }
  };

  return (
    
    <div ref={contacts} className=' bg-white pt-10 pb-5 mt-10 font-custom' id='contacts'>
      <div className='flex justify-center items-center mx-3 mb-6 max-sm:flex-col lg:flex-row max-md: flex-col'>
        <div className='flex flex-col gap-5 text-center'>
          <h1 className='text-black text-5xl max-sm:text-center font-lobster'>Connect with us</h1>
          <p className='text-black  max-sm:text-center'>Feel free to contact us using this form or by calling our hotline.</p>
          <div className='flex justify-center items-center lg:pb-10 max-lg:pb-10 max-sm:pb-10 max-md:pb-10'><BsFillTelephoneFill className='text-4xl max-sm:text-lg' /><p className='px-2 max-sm:text-lg text-3xl'>+1 281-642-2355</p></div>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className=' flex justify-center items-center flex-col gap-5 px-4 my-auto w-[50%] max-w-full mx-auto max-sm:w-full max-md:w-full max-lg:w-full'>
          <div className='flex gap-1 flex-col justify-start w-full max-sm:w-full max-md:w-full max-lg:w-full'>
            <label htmlFor="name" className=' text-black'>Name</label>
            <input onChange={e=>setName(e.target.value)} className='border border-slate-900  w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' 
            name='from_name' type="text"  />
          </div>
          <div className='flex gap-1 flex-col justify-start w-full'>
            <label htmlFor="email" className='text-black'>Email</label>
            <input onChange={e=>setEmail(e.target.value)} name='from_email' className='border border-slate-900  w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="email" id="email" />
          </div>
          <div className='flex gap-1 flex-col justify-start w-full'>
            <label htmlFor="phone" className='text-black'>Phone Number</label>
            <input onChange={e=>setphoneNumber(e.target.value)} name='from_phone' className='border border-slate-900 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="text" id="phone" />
          </div>
          <div className='flex gap-1 flex-col justify-start w-full'>
            <label htmlFor="message" className='text-black'>Message</label>
            <textarea onChange={e=>setMessage(e.target.value)} rows="4" className='appearance-none border border-slate-900 block rounded-sm w-full focus:outline focus:border min-h-[150px] max-h-[300px] focus:border-teal-500 resize-y' cols="4" type="text" name="message" id="message" ></textarea>
          </div>
            <input type="submit"  value='Send' className='text-white bg-slate-800 px-4 py-2 cursor-pointer rounded-sm transition-all hover:scale-105 duration-300 hover:shadow-md' />  
        </form>
      </div>
    </div>
  )
}

export default contacts