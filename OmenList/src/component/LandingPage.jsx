import React from 'react'
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className='w-full h-screen pt-2'>
      
     
      <div className='textstructure mt-20 md:mt-38 px-6 md:px-20'>
        
        <div className='masker font-["founders Grotesk"]'>
          <h1 className='text-white uppercase text-[10vw] md:text-[7.5vw] leading-none tracking-tighter font-medium'>We Create</h1>
        </div>
        
        <div className='masker font-["founders Grotesk"]'>
          <h1 className='text-white uppercase text-[10vw] md:text-9xl leading-none tracking-tighter font-regular'>Eye Opening</h1>
        </div>
        
        <div className='masker font-["founders Grotesk"]'>
          <h1 className='text-white uppercase text-[10vw] md:text-9xl leading-none tracking-tighter font-light'>Presentations</h1>
        </div>

      </div>

   
      <div className='border-t border-zinc-700 mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-between py-5 px-6 md:px-20 gap-6'>
        
        <div className='flex flex-col md:flex-row text-center md:text-left gap-4 md:gap-10'>
          {["For Public And Private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className='text-sm md:text-md font-medium tracking-tight leading-none'>{item}</p>
          ))}
        </div>
        
        <div className='start flex items-center gap-4 md:gap-5'>
          <div className='px-4 md:px-5 hover:bg-black py-2 border-2 rounded-full border-zinc-800 text-xs md:text-sm cursor-pointer'>
            Start the Project
          </div>
          <div className='w-5 h-5 rounded-full border border-zinc-800 flex items-center justify-center cursor-pointer'>
            <span className='rotate-[45deg] text-xs'>
              <FaArrowUp />
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LandingPage
