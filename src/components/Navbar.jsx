import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Searchbar from './Searchbar';

const Navbar = () => {
  const [nav, setNav]= useState(true)
  const handleNav = () => {
      setNav(!nav)
  }
  return (

    
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
       <h1 className='w-full text-3xl font-bold text-[#e85e56]'> NAME.</h1>

       <div >
        <Searchbar />
      </div>
      

       <ul className='hidden md:flex'>
            <li className='p-4 text-[#494949]'>HOME</li>
            <li className='p-4 text-[#494949]'>REQUEST</li>
            <li className='p-4 text-[#494949]'>LENDING</li>
            <li className='p-4 text-[#494949]'>PROFILE</li>
       </ul>
       <div>
        
      


       </div>
        <div onClick={handleNav} className='block md:hidden'>
          {
            !nav ? <AiOutlineClose size ={20}/> : <AiOutlineMenu size = {20} />
          }
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] p-4'> NAME.</h1>
            <ul>
            <li className='p-4 border-b border-r-gray-600'>HOME</li>
            <li className='p-4 border-b border-r-gray-600'>CONTACT</li>
            <li className='p-4 border-b border-r-gray-600'>LENDING</li>
            <li className='p-4 border-b border-r-gray-600'>PROFILE</li>
            </ul>
        </div>

  </div>
  )
}

export default Navbar