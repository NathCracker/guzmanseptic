import React from 'react'
import Images from './imagex'
import { useState } from 'react'
const gallery = () => {
    const[selectedImage, setselectedImage] = useState(Images[0]);

  return (

  <div className='flex flex-col max-sm:flex-col max-md:flex-col max-sm:hidden max-md:hidden max-lg:hidden mb-10'>
    <h1 className='text-black text-3xl text-center py-10'>GALLERY</h1>
    <div className='flex flex-col justify-center items-center max-h-full'>
        <img className='w-8/12 max-sm:w-10/12 max-sm:h-full h-[600px] border-4 border-black' src={selectedImage.url} alt="" />
        <div className='flex flex-wrap flex-row justify-center items-center '>
            {Images.map((img, index) => (
                <img 
                 className={'mt-5 my-1 mx-1 w-[100px] h-[100px] cursor-pointer ' + (selectedImage === img ? 'scale-110 border-2 border-black': "")}
                 src={img.url} 
                 key={index} 
                 onClick={() => setselectedImage(img)} 
                 alt="" />
            ))}
        </div>
    </div>
  </div>
  )
}

export default gallery