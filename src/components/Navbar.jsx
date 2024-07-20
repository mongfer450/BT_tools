import React from 'react'
import Dropdown from './Dropdown'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-white bg-stone-950 h-24 px-20'>
        <h1 className='w-full font-semibold  text-3xl'>Bigtime Tools.</h1>
        <ul className='flex'>
            <li className='p-5'><a href="#">Home</a></li>
            <li className='p-5'><a href="#">About_us</a></li>
            <li className='p-5'><a href="#">Tools</a></li>
        </ul>
    
    
    
    </div>
  )
}

export default Navbar