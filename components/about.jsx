import React, {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import {IoLocationSharp} from 'react-icons/io5'
gsap.registerPlugin(ScrollTrigger);
const about = () => {
  const title = useRef(null);
  const description = useRef(null);
  const map = useRef(null);
  const location = useRef(null);
  useEffect(() => {
    const el = title.current;
    const el2 = description.current;
    const el3 = map.current;
    const el4 = location.current;
    gsap.fromTo(el, {x: -100, opacity:0}, {x:0, opacity: 1, scrollTrigger:{
      trigger: el
    }});
    gsap.fromTo(el2, {x: -100, opacity:0}, {x:0, delay:0.5, opacity: 1, scrollTrigger:{
      trigger: el2
    }});
    gsap.fromTo(el3, {y:100, opacity: 0}, {y:0, delay: 0.5, opacity:1 , scrollTrigger:{
      trigger: el3
    }});
    gsap.fromTo(el4, { opacity: 0}, { opacity:1 , scrollTrigger:{
      trigger: el4
    }});
  })
  return (
    <div className=' bg-gradient-to-br from-gray-100 to-white font-custom flex justify-around snap-y  snap-mandatory max-sm:flex-col max-md: flex-wrap' id='about'>
        <div className='text-center flex flex-col items-center snap-start max-sm:mb-10'>
            <h1 ref={title} className='text-3xl py-5 font-lobster'>About us</h1>
            <div ref={description} className='max-w-lg text-justify max-sm:w-11/12 max-md:w-full '>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta rem quo eveniet sequi officiis. Asperiores laboriosam enim eveniet magnam? Tempora, molestias officia? Aspernatur officiis quas deleniti quo expedita minima?</p>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta rem quo eveniet sequi officiis. Asperiores laboriosam enim eveniet magnam? Tempora, molestias officia? Aspernatur officiis quas deleniti quo expedita minima?</p>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta rem quo eveniet sequi officiis. Asperiores laboriosam enim eveniet magnam? Tempora, molestias officia? Aspernatur officiis quas deleniti quo expedita minima?</p>
                <p className='my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta rem quo eveniet sequi officiis. Asperiores laboriosam enim eveniet magnam? Tempora, molestias officia? Aspernatur officiis quas deleniti quo expedita minima?</p>
            </div>
        </div>
        <div  ref={map} className=' flex flex-col justify-center max-sm:text-center max-w-[600px] max-h-[600px] max-sm:w-full max-md:w-full max-lg:w-[600px]'>
          <iframe className='lg:hidden  py-2 max-sm:w-full' width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=%2017914%20E%20Hardy%20Rd,%20North%20Houston,%20TX,%20United%20States,%20Texas&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <div className='flex flex-row text-center justify-center items-center my-5'>
            <IoLocationSharp className='text-2xl -translate-y-2 max-sm:-translate-y-6' />
            <p className='text-xl max-sm:pb-10 max-sm:text-xl '> 17914 E Hardy Rd, Houston, TX 77073, USA</p>
          </div>
          <iframe className='max-sm:hidden max-md:hidden max-lg:hidden py-2 max-sm:w-full' width="600" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=%2017914%20E%20Hardy%20Rd,%20North%20Houston,%20TX,%20United%20States,%20Texas&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </div>
    </div>
  )
}

export default about