import React from 'react'
import Footer from './Footer'
function Header() {
  return (
    <div className='grid grid-cols-1  md:grid-cols-8 h-screen  '>
      <div 
        className=' bg-contain bg-no-repeat bg-left-center md:col-span-6    bg-[#E95513]  relative hidden md:block'
        // style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
      >
        <div className=' absolute top-0 right-0 w-1/3' data-aos="fade" data-aos-duration="1500"><img src={process.env.PUBLIC_URL+'/images/header_c01.png'} alt="" /></div>
        <div className=' absolute bottom-0 left-0 w-1/3' data-aos="fade" data-aos-duration="1500" data-aos-delay="300"><img src={process.env.PUBLIC_URL+'/images/header_c02.png'} alt="" /></div>
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/4' >
          <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='w-full' data-aos="fade-down" data-aos-duration="1500" />
        </div>

      </div>
      <div 
        className='block md:hidden bg-cover bg-no-repeat bg-center w-full  aspect-[9/13] relative bg-[#E95513]'
      >
        <div className=' absolute top-0 right-0 w-2/5'><img src={process.env.PUBLIC_URL+'/images/header_c01.png'} alt="" /></div>
        <div className=' absolute bottom-0 left-0 w-2/5'><img src={process.env.PUBLIC_URL+'/images/header_c02.png'} alt="" /></div>
        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3' >
          <img src={process.env.PUBLIC_URL+'/images/header_title_mb.png'} alt="" className='w-full' data-aos="fade-up" data-aos-duration="1500" />
        </div>

      </div>
      <div className='md:col-span-2 bg-[#C30D23]'>
        <Footer />
      </div>


    </div>
  )
}

export default Header