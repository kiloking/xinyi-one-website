import React from 'react'

function Section04() {
  return (
    <div
    className='w-full py-10  bg-cover bg-center bg-no-repeat relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='w-10/12 md:w-1/2 order-2 md:order-1'>
          <img src={process.env.PUBLIC_URL+'/images/release/section04_p01.png'} alt="" />
        </div>
        <div className='md:w-1/2 p-12 md:p-20 order-1 md:order-2'>
          <img src={process.env.PUBLIC_URL+'/images/release/section04_title.png'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section04