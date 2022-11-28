import React from 'react';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import offertable from './serviceoffers';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const services = () => {
  const h1Text = useRef(null);
  const cardAnim = useRef(null);
  useEffect(() => {
    const el = h1Text.current;
    const el2 = cardAnim.current;
    gsap.fromTo(el, {x: -50, opacity: 0}, {x: 0, opacity: 1, duration: 1, scrollTrigger:{
      trigger: el
    }});
    gsap.fromTo(el2, {y: 100, opacity: 0}, {y: 0, opacity: 1, delay: 0.5, duration: 1, scrollTrigger:{
      trigger: el2
    }} )

  }, []);

  return (
    <div className='bg-gradient-to-bl from-gray-100 to-white font-custom text-center w-full max-h-full flex flex-col items-center' id='services'>
        <h1 className='text-5xl pt-10 font-lobster' ref={h1Text}>Our Services</h1>
        <div ref={cardAnim} className='flex justify-around items-center gap-5 py-10 max-sm:flex-wrap max-sm:gap-5 max-md:flex-wrap lg:flex-wrap max-lg:flex-wrap w-8/12'>
            {offertable.map((table) => (
                <div className='bg-white justify-start w-60 p-3 rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-xl hover:shadow-2xl max-sm:w-11/12 max-md:w-2/6 max-md:m-5 max-lg:w-2/6 max-lg:m-5 lg:m-5 '>
                <img className='w-full h-52 m-0 p-1 object-cover rounded-xl' src={table.url} alt="" />
                <div className='flex justify-end flex-col items-start'>
                    <h1 className='text-xl font-bold py-1'>{table.title}</h1>
                    <p className='text-justify py-2'>{table.description}</p>
                    <Link href='/services/installation' className='rounded-lg transition-all text-white bg-slate-900 hover:bg-slate-700 duration-100 p-1 px-2 '>Learn More</Link>
                </div>
            </div>
            ))}
        </div>  
    </div>
  )
}

export default services