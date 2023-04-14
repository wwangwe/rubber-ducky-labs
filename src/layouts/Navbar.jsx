import React from 'react'
import { logo, RDLLL, RDLPL, } from '../assets'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

export const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-black bg-opacity-50 backdrop-blur-md'>
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className='flex items-end space-x-2 hover:opacity-80'>
          <img src={RDLLL} className="h-5" draggable={false} alt="Logo" />
          {/* <img src={RDLPL} className="h-12" draggable={false} alt="Logo" /> */}
          {/* <span className='text-2xl text-white font-medium'>Rubber Ducky Labs</span> */}
        </a>
        <div className="hidden md:flex justify-end space-x-8">
          <Fade cascade triggerOnce delay={500} duration={500}>
            <Link to='/' className='text-white uppercase tracking-[4px] text-[12px] hover:text-primary'>Home</Link>
            <Link to='/company/' className='text-white uppercase tracking-[4px] text-[12px] hover:text-primary'>Company</Link>
            <Link to='/team/' className='text-white uppercase tracking-[4px] text-[12px] hover:text-primary'>Team</Link>
            <Link to='/contact/' className='text-white uppercase tracking-[4px] text-[12px] hover:text-primary'>Contact</Link>
          </Fade>
        </div>
      </div>
    </nav>
  )
}
