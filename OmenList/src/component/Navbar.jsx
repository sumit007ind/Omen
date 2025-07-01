import React from 'react'

const Navbar = () => {
  return (
    <div  className='w-full px-20 py-8 '>
      <div className='text-xl font-bold text-white'>
        OMEN
      </div>
      <div className='links text-white' >
        {["Services" , "Our Works" , "About Us" , "Insights"].map((item,index) =>(<a key={index} className='text-md font-semibold'>{item}</a>))}
      </div>
    </div>
  )
}

export default Navbar
