import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navLinks = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
    {
      path: '/skills',
      name: 'Skills',
    },
    {
      path: '/works',
      name: 'Works',
    },
    {
      path: '/contact',
      name: 'Contact',
    }
  ]

  return (
    <ul className='glass text-[#fff] pt-2 pb-2 pl-2 pr-2 md:pl-3 md:pr-3 rounded-full text-[12px] md:text-[14px]   text-center flex items-center justify-center gap-4 bg-[#eee]  bottom-6  z-10 cursor-none '>
      {
        navLinks.map((navLink,index) => {
          return (<Link to={navLink.path} className='' key={index}><li className='hover:animate-pulse hover:text-[#ccc]'>{navLink.name}</li></Link>  )
        })
      }
    </ul>
  )
}

export default Navbar