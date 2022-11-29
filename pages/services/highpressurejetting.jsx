import React from 'react'
import About from '../../components/about'
import Contacts from '../../components/contacts'
import Manualservice from '../../components/manualservice'
import Gallery from '../../components/gallery'
import Slider from '../../components/slider'

const highpressurejetting = () => {
  return (
    <>
    <Manualservice Title='The Best High Pressure Jetting Service' />
    <Gallery />
    <Slider/>
   <About/>
   <Contacts/>
    </>
  )
}

export default highpressurejetting