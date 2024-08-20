import React from 'react'
import styles from '../page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from "../useMousePosition.js";
import Experience from "./Experience.jsx"

export default function About() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 40;

  return (
    <main className={styles.main}>
      <motion.div 
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <div className=' flex flex-col  p-2 m-4 sm:m-10 sm:p-10 md:m-20 md:p-20 justify-center '>
        <h6 className='text-[10px] sm:text-[15px] font-semibold text-start tracking-widest uppercase'></h6> <br />
        <h1 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-start text-[15px] sm:text-[25px] leading-tight md:text-[35px] xl:text-[45px]  md:tracking-wide  uppercase font-semibold'> Do you need stunning and user-friendly website? Sounds like you want the Mona Lisa painted on a flip phone. I can do that, but it{"'"}ll cost you an arm and a leg... and maybe a kidney.</h1>
        </div> 
      </motion.div>

      <div className={styles.body}>
      <div className=' flex flex-col p-2 m-4 sm:m-10 sm:p-10 md:m-20 md:p-20 justify-center '>
        <h6 className='text-[10px] sm:text-[15px] font-semibold text-start tracking-widest uppercase'></h6> <br />
        <h1 className='text-start text-[15px] sm:text-[25px] leading-tight md:text-[35px] xl:text-[45px]  md:tracking-wide  uppercase font-semibold'>More than just code, I build dreams. I am Gokul and I am a passionate web developer, I translate your vision into stunning, user-friendly websites that captivate audiences and achieve your goals.</h1>
        </div> 
      </div>
      <div className='md:h-screen w-full flex items-center justify-center'>
      <Experience />
      </div>
    </main>
  )
}