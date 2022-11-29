import Header from '../components/header'
import About from '../components/about'
import Services from '../components/services'
import Contacts from '../components/contacts'
import { ToastContainer } from 'react-toastify'
export default function Home(){

  return(
    <>
    <Header />
    <Services />
    <About />
    <Contacts />
    <ToastContainer />
    </>
  )
}