import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const contacts = () => {
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
    const failed = () => toast.error('Error please try again', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    e.preventDefault();
    emailjs.sendForm('service_h53hsbv', 'template_2wsgejr', form.current, '55VfGu7c3pQDEh_no')
      .then((result) => {
          console.log(result.text);
          success();
      }, (error) => {
          console.log(error.text);
          failed();
      });
  };

  return (
    <div className='bg-slate-900 pt-10 pb-5' id='contacts'>
      <div className='flex justify-center items-center mx-3 mb-6 max-sm:flex-col lg:flex-row max-md: flex-col'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-white text-5xl max-sm:text-center'>CONNECT WITH US</h1>
          <p className='text-white lg:pb-10 max-lg:pb-10 max-sm:pb-10 max-md:pb-10 max-sm:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sit.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} action="" className=' flex justify-center items-center flex-col gap-5 px-4 my-auto w-[50%] max-w-full mx-auto max-sm:w-full max-md:w-full max-lg:w-full'>
          <div className='flex gap-1 flex-col justify-start w-full max-sm:w-full max-md:w-full max-lg:w-full'>
            <label htmlFor="name" className=' text-white'>Name</label>
            <input className='border border-gray-400 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' 
            name='from_name' type="text"  />
          </div>
          <div className='flex gap-1 flex-col justify-start w-full'>
            <label htmlFor="email" className='text-white'>Email</label>
            <input name='from_email' className='border border-gray-400 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="email" id="email" />
          </div>
          <div className='flex gap-1 flex-col justify-start w-full'>
            <label htmlFor="phone" className='text-white'>Phone Number</label>
            <input name='from_phone' className='border border-gray-400 w-full rounded-sm focus:outline-none focus:border-teal-500 py-1' type="text" id="phone" />
          </div>
          <div className='flex gap-1 flex-col justify-start w-full'>
            <label htmlFor="message" className='text-white'>Message</label>
            <textarea rows="4" className='appearance-none block resize-none rounded-sm w-full focus:outline focus:border border-teal-500' cols="4" type="text" name="message" id="message" ></textarea>
          </div>
            <input type="submit" value="Send" className='text-white bg-slate-800 px-4 py-2 cursor-pointer rounded-sm transition-all hover:scale-105 duration-300 hover:shadow-md' />  
            <ToastContainer/>
        </form>
      </div>
    </div>
  )
}

export default contacts