import React from 'react'
import single from '../assets/images/single.png';
import double from '../assets/images/double.png';
import triple from '../assets/images/triple.png';



const Cards = () => {
  return (
    <div className='py-[10rem] px-2'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-5'>
        <div className='w-full shadow-xl h-[500px] hover:scale-105 duration-100 my-4'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="single image" />
          <h2 className='text-center font-bold text-2xl py-8'>Web Development</h2>
          <p className='text-center font-bold text-4xl'>$150</p>

          <div className='text-center font-semibold'>
            <p className='border-b mx-8 mt-8'>Lorem Ipsum is simply</p>
            <p className='border-b mx-8 mt-8'>lorem Ipsum is simply dumy text of the planning </p>
            <p className='border-b mx-8 mt-8'>lorem Ipsum is simply dumy</p>
          </div>
          
          <div className='text-center'>
            <button className='bg-green-300 p-3 rounded-md my-6 hover:bg-green-400 hover:text-black w-[200px]'>Start Trial</button>
          </div>

        </div>
        <div className='w-full shadow-xl h-[500px] hover:scale-105 duration-500 bg-gray-200 my-4'>
          <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="double image" />
          <h2 className='text-center font-bold text-2xl py-8'>Web Development</h2>
          <p className='text-center font-bold text-4xl'>$150</p>

          <div className='text-center font-semibold'>
            <p className='border-b mx-8 mt-8'>Lorem Ipsum is simply</p>
            <p className='border-b mx-8 mt-8'>lorem Ipsum is simply dumy text of the planning </p>
            <p className='border-b mx-8 mt-8'>lorem Ipsum is simply dumy</p>
          </div>
          <div className='text-center'>
            <button className='bg-green-300 p-3 rounded-md my-6 hover:bg-green-400 hover:text-black w-[200px]'>Start Trial</button>
          </div>

        </div>
        <div className='w-full shadow-xl h-[500px] hover:scale-105 duration-500 my-4'>
          <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple}
            alt="triple image" />
          <h2 className='text-center font-bold text-2xl py-8'>Web Development</h2>
          <p className='text-center font-bold text-4xl'>$150</p>

          <div className='text-center font-semibold'>
            <p className='border-b mx-8 mt-8'>Lorem Ipsum is simply</p>
            <p className='border-b mx-8 mt-8'>lorem Ipsum is simply dumy text of the planning </p>
            <p className='border-b mx-8 mt-8'>lorem Ipsum is simply dumy</p>
          </div>
          <div className='text-center'>
            <button className='bg-black p-3 rounded-md my-6 text-green-400 hover:bg-slate-900 w-[200px]'>Start Trial</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cards