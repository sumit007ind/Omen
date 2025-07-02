import React from 'react'
import Navbar from './component/Navbar'
import LandingPage from './component/LandingPage'
import Marquee from './component/Marquee'
import About from './component/About'

const App = () => {
  return (
    
    <div className='w-full m-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
    </div>
      
    
    
    
  )
}

export default App
