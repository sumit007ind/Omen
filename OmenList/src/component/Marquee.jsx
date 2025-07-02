import React from 'react'
import { motion } from "motion/react"

const Marquee = () => {
  return (
    <div  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex gap-5 px-15 overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:0}} animate={{x:"-100"}} transitio={{ease:"linear",repeat:Infinity,duration:5}}  className='text-[6vw] uppercase leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold mb-12 pt-6'>We are Omen</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[6vw] uppercase leading-none font-["Founders_Grotesk_X-Condensed"] font-semibold mb-12 pt-6'>Culture and </motion.h1>
        

      </div> 
    </div>
  )
}

export default Marquee
