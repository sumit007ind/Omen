import React from 'react'

const Eyes = () => {
  return (
    <div className='w-full h-screen mt-4 overflow-hidden flex items-center justify-center'>
      <div className='w-[950px] h-[7500px] overflow-hidden relative flex items-center justify-center'>
        <img 
          src="https://cdn.pixabay.com/photo/2017/01/17/12/13/soap-bubble-1986657_1280.jpg" 
          alt="Bubble" 
          className='w-full h-full object-contain' 
        />
         <div className='absolute top-1/2 left-1/2 -translate-x-[50%] flex gap-10 -translate-y-[50%]   '>
         <div className=' flex items-center justify-center w-[15vw] h-[15vw] mt-3 bg-zinc-100 rounded-full'>
            <div className=' w-2/3  h-2/3 mt-3 bg-zinc-900 flex items-center justify-center rounded-full'>
            
             <div className=' w-1/4  h-1/4 mt-3 bg-zinc-100 rounded-full'></div>
             
             </div>
             

         </div>
          <div className='flex items-center justify-center w-[15vw] h-[15vw] mt-3 bg-zinc-100 rounded-full bg-black'>
            <div className='flex items-center justify-center w-2/3 h-2/3  mt-3 bg-zinc-900 rounded-full '>
            <div className=' w-1/4 h-1/4  mt-3 bg-zinc-100 rounded-full '></div></div>
         </div>
          </div>
         </div>
      </div>
     

    
  )
}

export default Eyes;
