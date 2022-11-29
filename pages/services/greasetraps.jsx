import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Manualservice from '../../components/manualservice'
import Gallery from '../../components/gallery'
import Slider from '../../components/slider'

const greasetraps = () => {
  return (
    <>
    <Manualservice Title='The Grease trap service in Houston' />
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
    </>
  )
}

export default greasetraps