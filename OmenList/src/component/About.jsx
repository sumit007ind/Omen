import React from 'react'


const About = () => {
  return (
    <div className='w-full p-20 leading-[3.5vw] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='font-["Neue_Montreal"] text-[3vw] tracking-tight'>
        We design bold, eye-opening presentations that elevate your ideas. Whether you're pitching to investors or  It's time to make your message impossible to ignore...
      </h1>
      <div className='w-full  flex gap-5 pt-15 mt-20 border-t-[3px] border-[#a1b562]'>
        <div className='w-1/2 '>

        <h1 className='text-7xl'>Our approach:</h1>
        <button className=' hover:bg-black   flex items-center gap-5 px-10 mt-8 font-semibold py-1 bg-zinc-900 rounded-full text-white '>Read More
            <div className='w-4 h-4 bg-zinc-100 rounded-full'></div>
        </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-4xl '>
        <img className='rounded-3xl' src='https://www.shutterstock.com/image-photo/side-view-young-smiling-happy-600nw-2326622259.jpg'/>
  
        </div>
        
      </div>
    </div>
  )
}

export default About
