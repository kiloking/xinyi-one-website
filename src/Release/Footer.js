import React,{useState,useEffect} from 'react'
import { useForm, reset } from "react-hook-form";
import Modal from '../Components/Modal';

function Footer() {
  const [msgMailTitle,setMsgMailTitle] = useState('新亦建設八德煥新的表單')
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState:{ errors },reset } = useForm({
    defaultValues:{
      name:"",
      tel: "",
      mail: "",
      house_types:"",
      area:"",
      main_district:"",
      sub_district:"",
      message:"",
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)

    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
        reset()
      }
    }).catch(error => console.log('error'));


  };
  return (
    <div
      className='w-full min-h-screen bg-cover bg-center bg-no-repeat relative'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/footer_bg.png'})`,
      }}
    >
      <div className='flex flex-col md:flex-row items-center justify-between w-10/12 mx-auto py-20'>
        <div className='flex flex-col  md:w-3/5     '>
          <div className='w-12/12 md:w-full mx-auto' >
            <img src={process.env.PUBLIC_URL+'/images/release/footer_title.png'} alt="" className=' mx-auto' />
            {/* 表單 */}
            <div className='md:w-full mx-auto'>
              <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto pt-5 " data-aos="fade-up" data-aos-duration="1500" >
                <div className='flex flex-col w-full items-center justify-center'>
                  <div className='w-full  my-1 flex items-center justify-center  space-x-4 '>
                    <label htmlFor="" className='text-white text-right w-3/12 break-keep'>*姓名</label>
                    <input type="text" className="block  bg-white  w-full
                        px-3 py-2  " placeholder="姓名"   {...register("name", { required: true})}/>
                  </div>
                  <div className='w-full  my-1 flex items-center justify-center space-x-4'>
                    <label htmlFor="" className='text-white w-3/12 text-right'>*電話</label>
                    <input type="text" className="block  bg-white  w-full
                        px-3 py-2  " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
                  </div>
                  <div className='w-full my-1  flex items-center justify-center space-x-4'>
                    <label htmlFor="" className='text-white w-3/12 text-right'>Email</label>
                    <input type="mail" className="block  bg-white   w-full
                        px-3 py-2 " placeholder="Email"   {...register("mail")}/>
                  </div>
                  <div className='w-full my-1  flex items-start justify-center space-x-4'>
                    <label htmlFor="" className='text-white w-3/12 text-right'>留言</label>
                    <textarea name="" id=""  rows="4" className='block  bg-white   w-full
                        px-3 py-2' {...register("message")}></textarea>

                  </div>
                </div>
                <input type="hidden" name="msgMailTitle" value={msgMailTitle}  {...register("msgMailTitle", { required: true})}/>
                <div className='text-[#5C2C1F] font-bold text-sm w-full mx-auto mt-4'>
                  <div className=' flex mt-2 text-xs md:text-base items-center justify-center'>
                    <input type="checkbox"  className='px-1 mr-1' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                    <div className='text-white ml-2 text-xs  underline-offset-2 cursor-pointer' onClick={()=>setIsOpen(true)}>本人已知悉，<span className=''>『個人資料蒐集聲明事項』</span></div>
                  </div>
                </div>
                <div className='flex w-full mx-auto gap-4 my-3 md:mt-8'>
                  <button className='border-white  border-2 px-2 py-2  font-bold w-full    text-md tracking-wide text-[#fff]' type='submit'>送出</button>
                  <button className='bg-[#fff] px-2 py-2  font-bold w-full   text-md tracking-wide text-[#223553]' type='reset'>清除</button>
                </div>
                <div>{error}  {mailSent}</div>            
              </form>
            </div>

          </div>
        </div>
        <div className='w-full md:w-1/2 md:pl-8 h-full'>
  
            <iframe width="100%" height="100%" className=" aspect-[4/3] " src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d904.4837965797493!2d121.2891389!3d24.9342778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU2JzAzLjQiTiAxMjHCsDE3JzIwLjkiRQ!5e0!3m2!1szh-TW!2stw!4v1686655595133!5m2!1szh-TW!2stw" frameBorder="0" allowFullScreen=""/>
         
        </div>

      </div>
      <div className='w-10/12 md:w-8/12 mx-auto'>
        <img src={process.env.PUBLIC_URL+'/images/release/footer_subtitle.png'} alt=""  className='max-w-full'/>
      </div>
      <div className="mt-14  w-full bottom-0 grid grid-cols-3 divide-x-4 divide-white ">
        <a href="tel:033682868" className="bg-zinc-200 py-5 md:py-2 flex justify-center items-center"><img src={process.env.PUBLIC_URL+'/images/tel.png'} alt="" className="max-w-full w-2/3 md:w-1/3" /></a>
        <a href="https://www.facebook.com/profile.php?id=100093249848242&mibextid=LQQJ4d" target="_blank" className="bg-zinc-200 p-2 flex justify-center items-center"><img src={process.env.PUBLIC_URL+'/images/fb.png'} alt="" className="max-w-full w-2/3 md:w-1/3"/></a>
        <a href="https://goo.gl/maps/af32QCmVyDv3S1hp7" target="_blank" className="bg-zinc-200 p-2 flex justify-center items-center"><img src={process.env.PUBLIC_URL+'/images/map.png'} alt="" className="max-w-full w-2/3 md:w-1/3"/></a>
      </div>
    </div>
  )
}

export default Footer