import {gsap, Power3} from 'gsap';
import React, {useRef, useEffect} from 'react'

const header = () => {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut();
  let headering = useRef(null);
  useEffect(() =>{
    tl.to(headering, 1, {opacity: 1, y: 20, ease: ease});
  })
  return (
    <div className='text-center'>
      <div className='max-w-full min-h-screen flex items-center justify-center bg-gradient-to-tl  from-black to-gray-500'>
        <div className='w-full h-full object-cover absolute mix-blend-overlay bg-guzmans-bg bg-fixed bg-cover' alt="Picture of our trucks" ></div>
        <h1 ref={el => headering = el} className=' opacity-0 max-sm:text-center max-md:text-center text-5xl text-white font-bold'>Best Septic Service in Houston</h1>
      </div>
    </div>
  )
}

export default header
