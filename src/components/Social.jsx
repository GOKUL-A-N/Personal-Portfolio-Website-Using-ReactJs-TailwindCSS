import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";


const Social = () => {
  return (
    <ul className=' text-[21px] hover:text-[#afa18f] flex flex-col gap-3 fixed text-right left-6 bottom-6 z-10 cursor-pointer '>
        <a href="https://www.linkedin.com/in/gokulnatarajmoorthy/"><li className=' hover:text-black text-[#afaaaa]'><FaLinkedin /></li></a>
        <a href="https://github.com/GOKUL-A-N"><li className=' hover:text-black text-[#afaaaa]'><FaGithub /></li></a>
        <a href="https://leetcode.com/u/GOKUL_A_N_/"><li className=' hover:text-black text-[#afaaaa]'><SiLeetcode /></li></a>
        <a href="mailto:gokulnatarajmoorthy@gmail.com"><li className='text-[19px] text-[#afaaaa]  hover:text-black'><SiGmail /></li></a>
    </ul>
  )
}

export default Social