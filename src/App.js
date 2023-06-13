import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  useEffect(() => {
    setTimeout(function() {
        AOS.init({
          
        });
    }, 100);
    // AOS.refresh()
  }, []);
  return (
    <div className="App pb-20">
      <Header  />
      <div className=" fixed w-full bottom-0 grid grid-cols-3 divide-x-4 divide-white ">
        <a href="tel:033682868" className="bg-zinc-200 py-5 md:py-2 flex justify-center items-center"><img src={process.env.PUBLIC_URL+'/images/tel.png'} alt="" className="max-w-full w-2/3 md:w-1/3" /></a>
        <a href="https://www.facebook.com/" target="_blank" className="bg-zinc-200 p-2 flex justify-center items-center"><img src={process.env.PUBLIC_URL+'/images/fb.png'} alt="" className="max-w-full w-2/3 md:w-1/3"/></a>
        <a href="https://goo.gl/maps/af32QCmVyDv3S1hp7" target="_blank" className="bg-zinc-200 p-2 flex justify-center items-center"><img src={process.env.PUBLIC_URL+'/images/map.png'} alt="" className="max-w-full w-2/3 md:w-1/3"/></a>
      </div>
    </div>
  );
}

export default App;
