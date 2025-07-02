import React from 'react'
import { FaArrowUp } from "react-icons/fa";


const LandingPage = () => {
  return (
    <div className='w-full h-screen pt-2 '>
      <div className='textstructure mt-38 px-20'>
        
        <div className='masker font-["founders Grotesk"]'>
            <h1 className='text-white uppercase text-[7.5vw] leading-none tracking-tighter font-mediumt'>We Create</h1>
        </div>
          <div className='masker font-["founders Grotesk"]'>
            <h1 className='text-white uppercase text-9xl leading-none tracking-tighter font-regular'>Eye Opening</h1>
        </div>
          <div className='masker font-["founders Grotesk"]'>
            <h1 className='text-white uppercase text-9xl leading-none tracking-tighter font-light'>Presentations</h1>
        </div>
       
        
      </div>
      <div className='border-t-1 border-zinc-700 mt-23 flex item-center justify-between py-5 px-20'>
        {["For Public And Private companies","From the first pitch to IPO"].map((item,index)=><p className='text-md mt-3 px-4  font-light tracking-tight leading-none'>{item}</p>)}
        <div className='start flex items-center gap-5'>
          <div className='px-5  hover:bg-black py-2 border-[2px] rounded-full border-zinc-800 text-small '>
            Start the Project
          </div>
          <div className='w-5 h-5 rounded-full  border-zinc-800 text-small'><FaArrowUp/></div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
