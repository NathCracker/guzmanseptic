import React from 'react'

const manualservice = ({Title}) => {
  return (
    <>
    <div>
    <div className='max-w-full min-h-screen flex items-center justify-center bg-gradient-to-tl  from-black to-gray-500'>
      <div className='w-full h-full object-cover absolute mix-blend-overlay bg-septic-cleaning bg-fixed bg-cover' alt="Picture of our trucks" ></div>
      <h1 className=' max-sm:text-4xl max-sm:text-center text-5xl text-white font-bold'>{Title}</h1>
    </div>
  </div>
    <div id='services' className='flex flex-row text-center items-center gap-10 max-sm:flex-col max-md:flex-col max-lg:flex-col'>
      <div className=' flex flex-col w-4/12 items-center justify-start max-sm:w-10/12 max-md:w-10/12 max-lg:w-10/12'>
        <h1 className='py-5 text-3xl max-sm:text-2xl'>Septic Tank Cleaning Service</h1>
        <img className='px-3 rounded-3xl max-sm:w-full max-sm:h-full max-md:h-full max-md:w-full max-lg:h-full max-lg:w-full ' src="/images/images7.jpg" alt="" />
      </div>
      <div className=' flex flex-col justify-start text-start w-8/12 max-sm:w-10/12 max-sm: gap-5'>
        <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex.</p>
        <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex.</p>
        <p className=' text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur illum odit harum atque maxime incidunt eligendi nisi repudiandae, aliquid unde dicta esse cupiditate at commodi iure perspiciatis repellendus ex.</p>
      </div>  
    </div>
    </>
  )
}

export default manualservice
