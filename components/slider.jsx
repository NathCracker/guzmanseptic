import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import images from '../components/imagex'

const slideImages = [
    {
      url: '/images/guzmansepticbackground.jpg',
    },
    {
      url: '/images/installation.jpg',
    },
    {
      url: '/images/septictanks.jpg',
    },
    {
      url: '/images/images7.jpg',
    }
  ];

const slider = () => {
  return (
    <div className='flex flex-col items-center lg:hidden'>
        <h1 className='text-center text-3xl py-5'>GALLERY</h1>
        <div className="slide-container w-11/12">
        <Slide>
         {images.map((slideimages, index)=> (
            <div className="each-slide h-full" key={index}>
              <div className='flex items-center justify-center bg-cover w-full h-[500px] lg:h-screen' style={{'backgroundImage': `url(${slideimages.url})`}}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>

  )
}

export default slider