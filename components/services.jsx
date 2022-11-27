import React from 'react'
import Link from 'next/link'
import offertable from './serviceoffers'
const services = () => {


  return (
    <div className='bg-gray-200 text-center w-full max-h-full' id='services'>
        <h1 className='text-5xl pt-10'>SERVICES WE OFFER</h1>
        <div className='flex justify-around items-center py-10 max-sm:flex-wrap max-sm:gap-5 max-md:flex-wrap lg:flex-wrap max-lg:flex-wrap'>
            {offertable.map((table) => (
                <div className='bg-white justify-start w-60 p-3 rounded-xl transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl max-sm:w-11/12 max-md:w-2/6 max-md:m-5 max-lg:w-2/6 max-lg:m-5 lg:m-5 '>
                <img className='w-full h-52 m-0 p-1 object-cover rounded-xl' src={table.url} alt="" />
                <div className='flex justify-end flex-col items-start'>
                    <h1 className='text-xl font-bold py-1'>{table.title}</h1>
                    <p className='text-justify py-2'>{table.description}</p>
                    <Link href='/services/installation' className='rounded-lg transition-all text-white bg-slate-900 hover:bg-slate-700 duration-100 p-1 px-2 '>Learn More</Link>
                </div>
            </div>
            ))}
        </div>  
    </div>
  )
}

export default services