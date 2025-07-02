import React from 'react'

const Navbar = () => {
  return (
    <div  className='  fixed z-[999] w-full px-20 py-8 font-["NeueMontreal"] flex justify-between items-center '>
      <div className='text-xl font-bold text-white '>
        OMEN
      </div>
      <div className='links text-white flex gap-10  ' >
        {["Services" , "Our Works" , "About Us" , "Insights" ,"Contact" ].map((item,index) =>(<a key={index} className='text-md font-light'>{item}</a>))}
      </div>
    </div>
  )
}

export default Navbar
