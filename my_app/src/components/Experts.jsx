import React from 'react'
import laptop from '../assets/images/laptop.jpg';

const Experts = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={laptop} alt="laptop image" />
                <div className='flex flex-col justify-center'>
                <h1 className='text-purple-400 font-bold'>LEARN FROM EXPERTS</h1>
                <p className='text-gray-500 my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores incidunt nesciunt vero doloremque ipsam enim impedit magnam molestias, libero iure voluptates delectus quisquam obcaecati. Error, quas enim facere officia qui unde magni reprehenderit!</p>
                <button className='bg-black text-white p-3 rounded-md my-2 hover:bg-gray-200 hover:text-black w-[200px]'>Get Started</button>
                </div>
            </div>
        </div>
    )
};

export default Experts;