import React from 'react'

function Section03() {
  return (
    <div className='bg-[#BF0D23] relative min-h-screen'>
      <div className='right-0 absolute top-0 w-1/4'>
        <img src={process.env.PUBLIC_URL+'/images/release/section_c02.png'} alt="" className='max-w-full' />
      </div>
      <div className='w-5/12 mx-auto  pt-[10%]  '>
        <img src={process.env.PUBLIC_URL+'/images/release/section03_title.png'} alt="" className='max-w-full' />
      </div>
      <div className='flex flex-col md:flex-row relative items-center '>
        <div className='md:w-1/2  '>
          <img src={process.env.PUBLIC_URL+'/images/release/section03_p01.png'} alt="" />
        </div>
        <div className='md:w-1/2 py-10 md:py-0 px-16 relative'>
          <img src={process.env.PUBLIC_URL+'/images/release/section03_t01.png'} alt="" />
          <div className='w-2/3 mx-auto pt-12'>
            <img src={process.env.PUBLIC_URL+'/images/release/section03_t01_p.png'} alt=""  className='max-w-full'/>
          </div>
          
        </div>

       
      </div>
      <div className='flex flex-col md:flex-row relative items-center '>

        <div className='md:w-1/2 p-16 md:p-36 relative '>
          <img src={process.env.PUBLIC_URL+'/images/release/section03_t02.png'} alt="" className='max-w-full' />          
        </div>
        <div className='md:w-1/2  '>
          <img src={process.env.PUBLIC_URL+'/images/release/section03_p02.png'} alt="" />
        </div>

       
      </div>
    </div>
  )
}

export default Section03