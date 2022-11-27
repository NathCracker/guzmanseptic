import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Slider from '../../components/slider'
import Gallery from '../../components/gallery'
import Manualservice from '../../components/manualservice'
const Cleaning = () => {
  return (
   <>
    <Manualservice Title='The Best Septic Cleaning Service' />
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
   </>
  )
}

export default Cleaning
