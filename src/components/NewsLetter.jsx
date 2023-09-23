import React from 'react'

 const  NewsLetter = ()=> {
  return (
    <div className='bg-blue-500 p-4'>
      <div className='max-w-[1240px ] mx-auto md:flex justify-between py-[50px]'>
        <div className='mb-4'>
          <h1 className='text-white font-bold text-2xl md:text-4xl'>Want To learns IT skills</h1>
          <span className='text-white mt-2'>
            sign up to our newsletter and stay upto date
          </span>
        </div>
        <div >
          <input type="text" placeholder='Search' className='p-3 rounded-md mr-2 text-slate-400' />
          <button className='bg-black text-white p-3 rounded-md hover:bg-gray-200 hover:text-black'>Get Started</button>
          <br />
          <p className='text-white mt-2'>We cares about the protection of your data <br />Because its Privacy </p>
        </div>
      </div>
    </div>
  )
}
export default NewsLetter