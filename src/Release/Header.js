import React from 'react'

function Header() {
  return (
    <div
      className='w-full h-[60vh] md:min-h-screen bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/header_bg.png'})`,
      }}
    >
      <div className='w-10/12 md:w-8/12  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' >
        <img src={process.env.PUBLIC_URL+'/images/release/header_logo.png'} alt="" className='max-w-full' data-aos="fade" data-aos-duration="1500"/>
      </div>
    </div>
  )
}

export default Header