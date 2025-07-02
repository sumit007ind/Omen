import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-6 md:px-20 py-4 md:py-8 font-['NeueMontreal'] flex justify-between items-center backdrop-blur-md">

      
      <div className='text-lg md:text-xl font-bold text-white'>
        OMEN
      </div>
      
      <div className='links text-white flex gap-4 md:gap-10 text-sm md:text-md'>
        {["Services", "Our Works", "About Us", "Insights", "Contact"].map((item, index) => (
          <a key={index} className='font-light cursor-pointer hover:underline'>
            {item}
          </a>
        ))}
      </div>
      
    </div>
  )
}

export default Navbar;
