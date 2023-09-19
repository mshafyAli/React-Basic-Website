import React from 'react';
import Typed from 'react-typed';


export default function Banners() {
  return (
    <div className='bg-blue-500 w-full py-[50px] '>
        <div className='max-w-[1240px] py-[100px] mx-auto  text-center font-bold'>
            <div className='p-[10px] text-xl md:text-3xl md:p-[24px]'>Learn With Us</div>
            <h2 className='p-[10px] text-white text-5xl md:text-[80px] md:p-[24px]'>Grow With Us</h2>
            <div className='p-[10px] text-white text-[20px] md:text-[50px] md:p-[24px]'>learn
            <Typed className='pl-3'
                    strings={['Web Development', 'React', 'JavaScript']}
                    typeSpeed={100}
                    loop = {true}
                    backSpeed={100}

                /></div>
                <button className='bg-black text-white p-3 rounded-md hover:bg-gray-200 hover:text-black'>Get Started</button>
        </div>
    </div>
  )
}
