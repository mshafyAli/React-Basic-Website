import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

export default function Header() {
    const [toggle,setToggle] = useState(false);
  return (
    <div className='bg-blue-500 p-4'>
        <div className='max-w-[1240px] items-center py-4 flex justify-between mx-auto '>
            <div className='font-bold text-2xl'>
                <h1>Soft Tech</h1>
            </div>

            {
                toggle ?
                <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block cursor-pointer' />
                :
                <AiOutlineMenu onClick={()=>setToggle(!toggle)}  className='text-white text-2xl md:hidden block cursor-pointer' />
           
            }


             
            <ul className='hidden md:flex text-white gap-10 '>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            {/* Response Menue */}

            <ul className={`duration-300 md:hidden w-full h-screen text-white bg-black fixed top-[96px] 
            ${toggle ? 'left-0' : '-left-full' } `}>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5'>Resources</li>
                <li className='p-5'>About</li>
                <li className='p-5'>Contact us</li>
            </ul>
        </div>
    </div>
  )
}
