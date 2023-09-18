import React, { useState } from 'react'
import { motion } from "framer-motion";
function Section02() {
  const [currentData , setCurrentData] = useState(0)
  const data = [ 
    {p:'section02_p01.png' , t:'section02_t01.png'},
    {p:'section02_p02.png' , t:'section02_t02.png'},
    {p:'section02_p03.png' , t:'section02_t03.png'},
  ]
  return (
    <div
    className='w-full py-10  bg-cover bg-center bg-no-repeat relative'
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section_bg.png'})`,
    }}
    >
      <div className='flex flex-col md:flex-row relative z-20'>
        <motion.div key={data[currentData].p} className='md:w-8/12 md:p-4 order-2 md:order-1' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: 1.2}} >
          <img src={process.env.PUBLIC_URL+'/images/release/'+data[currentData].p} alt="" />
        </motion.div>
        <div className='md:w-1/2 p-6 md:px-16 md:py-24 order-1 md:order-2'>
          <motion.img key={'text'+data[currentData].p} src={process.env.PUBLIC_URL+'/images/release/'+data[currentData].t} alt="" className='max-w-full' initial={{ opacity: 0,x:15 }} animate={{ opacity: 1,x:0 }} exit={{ opacity: 0 }}/>
          <div className='flex mt-12 gap-3'>
            {
              data.map((item,index)=>{
                return(
                  <div 
                    className={`w-3 h-3 cursor-pointer border-[#E55513] border rounded-full transition-all ${currentData ===index ? ' bg-[#E55513]' : ' bg-transparent  ' }`}
                    onClick={()=>setCurrentData(index)}
                  >

                  </div>
                )
              })
            }
            
          </div>
        </div>


      </div>
    </div>
  )
}

export default Section02