import React from 'react';
import v1 from '/video1.mp4';
import v3 from '/video2.mp4';

export default function Hero() {
  return (
    <>
      <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-4xl lg:text-7xl text-center tracking-wide'>
          VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>for developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
          Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!
        </p>
        <div className='flex justify-center my-10'>
          <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Start free</a>
          <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
        </div>
        <div className='flex flex-wrap justify-center mt-10'>
          <video autoPlay muted loop className='rounded-lg w-full sm:w-3/4 lg:w-2/5 max-w-[500px] border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={v1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay muted loop className='rounded-lg w-full sm:w-3/4 lg:w-2/5 max-w-[500px] border border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={v3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
