import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import Link from 'next/link'
import {Link as Links} from 'react-scroll'

const servicebar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <div className='max-sm:fixed max-sm:w-full bg-slate-800 flex justify-between items-center mx-0 my-0 max-w-screen py-0 px-5 lg:flex-row max-sm:flex-row sticky top-0'>
      <h1 className='text-3xl text-white max-sm:py-3 max-md:py-3 max-lg:py-3'>Guzman <span className='text-white font-bold'>Septic</span></h1>
      <button className='lg:hidden text-white' onClick={() => (setNavbarOpen(!navbarOpen))}><GiHamburgerMenu className='text-3xl' /></button>
      <div className="lg:flex lg:flex-row max-sm:flex-col justify-around items-center gap-10 max-md:hidden max-sm:hidden max-md: hidden">
        <Link  href='/' className='text-white py-4 px-6 h-full hover:bg-slate-700 '>Home</Link>
        <Links href='' activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} className='h-full py-4 px-6 text-white hover:bg-slate-700'>Services</Links>
        <Links href='' activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className='text-white py-4 px-6 h-full hover:bg-slate-700'>About</Links>
        <Links href='' activeClass="active" to="contacts" spy={true} smooth={true} offset={0} duration={500} className='text-white py-4 px-6 h-full hover:bg-slate-700'>Contacts</Links>
      </div>
    </div>

    <div className={' sticky top-0 lg:hidden text-white text-center bg-slate-800 flex-col ' + (navbarOpen ? 'flex' : 'hidden')}>
        <Link activeClass="active" to="/" spy={true} smooth={true} offset={0} duration={500} href="/" className=' p-2 hover:bg-slate-700'>HOME</Link>
        <Links activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} href="#" className='p-2  hover:bg-slate-700'>SERVICES</Links>
        <Links activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} href="#" className=' p-2 hover:bg-slate-700'>ABOUT</Links>
        <Links activeClass="active" to="contacts" spy={true} smooth={true} offset={0} duration={500} href="#" className=' p-2 hover:bg-slate-700'>CONTACTS</Links>
  </div>

    </>
  )
}

export default servicebar
