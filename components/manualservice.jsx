import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const manualservice = ({Title}) => {
  const titleAbove = useRef(null);
  const picLeft = useRef(null);
  const description = useRef(null);

  useEffect(() =>{
    const el = titleAbove.current;
    const el1 = picLeft.current;
    const el2 = description.current;
    gsap.fromTo(el, {x:-100, opacity:0}, {x:0, opacity:1, delay:0.3, scrollTrigger:{
      trigger: el
    }})
    gsap.fromTo(el1, {y:100, opacity:0}, {y:0, opacity:1, delay:0.3, scrollTrigger:{
      trigger: el1
    }})
    gsap.fromTo(el2, {x:200, opacity:0}, {x:0, opacity:1, delay:0.3, scrollTrigger:{
      trigger: el2
    }})
  })
  return (
    <>
    <div className='font-lobster tracking-widest'>
    <div className='max-w-full min-h-screen flex items-center justify-center bg-gradient-to-tl  from-black to-gray-500'>
      <div className='w-full h-full object-cover absolute mix-blend-overlay bg-septic-cleaning bg-fixed bg-cover' alt="Picture of our trucks" ></div>
      <h1 className=' max-sm:text-4xl max-sm:text-center text-5xl text-white font-bold'>{Title}</h1>
    </div>
  </div>
    <div id='services' className='font-custom flex flex-row text-center items-center gap-10 max-sm:flex-col max-md:flex-col max-lg:flex-col'>
      <div className=' flex flex-col w-4/12 items-center justify-start max-sm:w-10/12 max-md:w-10/12 max-lg:w-10/12'>
        <h1 ref={titleAbove} className=' font-bold py-5 text-3xl max-sm:text-2xl'>Septic Tank Cleaning Service</h1>
        <img ref={picLeft} className='px-3 max-sm:w-full max-sm:h-full max-md:h-full max-md:w-full max-lg:h-full max-lg:w-full ' src="/images/images7.jpg" alt="" />
      </div>
      <div ref={description} className=' flex flex-col justify-start items-start w-8/12 max-sm:w-10/12 max-sm: gap-5'>
        <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex.</p>
        <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex.</p>
        <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex.</p>
      </div>  
    </div>
    </>
  )
}

export default manualservice
