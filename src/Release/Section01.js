import React from 'react'

function Section01() {
  return (
    <div
      className='w-full min-h-screen bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
      }}
    >
      <div className='flex flex-col md:flex-row relative '>
        <div className='md:w-1/2 p-14 md:py-36 md:px-20'>
          <img src={process.env.PUBLIC_URL+'/images/release/section01_title.png'} alt="" />
        </div>
        <div className='md:w-1/2 md:pr-10 relative'>
          <img src={process.env.PUBLIC_URL+'/images/release/section01_p01.png'} alt="" />
          <img src={process.env.PUBLIC_URL+'/images/release/section01_p02.png'} alt="" className='max-w-full absolute -bottom-14 md:bottom-14 md:-left-32 w-1/2' />
        </div>
        <div className='w-[23%] absolute hidden md:block  md:-bottom-48 left-0  md:z-10'>
          <img src={process.env.PUBLIC_URL+'/images/release/section_c01.png'} alt="" className='max-w-full  ' />
        </div>
       
      </div>
    </div>
  )
}

export default Section01