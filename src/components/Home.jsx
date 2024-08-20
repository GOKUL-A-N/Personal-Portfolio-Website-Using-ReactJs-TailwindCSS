import styles from '../page.module.scss'
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from "../useMousePosition.js";

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 40;

  return (
    <main className={`${styles.main} flex items-center justify-center h-screen w-full`}>
      <motion.div 
        className={`${styles.mask} h-full w-full`}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
      >
          <div className='w-full h-full flex flex-col items-center justify-center'>
        <h6 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-[10px] sm:text-[12px] font-semibold text-center tracking-widest uppercase'>Gokul NatarajMoorthy</h6> 
        <h1 onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className='text-center text-[35px] sm:text-[35px] leading-tight md:text-[65px] xl:text-[65px]   uppercase font-black'><span>Robbing</span> <br /> <span>Good</span> <br /> <span>Designs</span> <br /> <span>Since</span> <br /> <span>2021</span> </h1>
        </div> 
      </motion.div>

      <div className={`${styles.body} h-full w-full`}>
        <div className='w-full h-full flex flex-col items-center justify-center '>
        <h6 className='reveal delay-700 text-[10px] sm:text-[12px] font-semibold text-center tracking-widest uppercase'>Gokul NatarajMoorthy</h6> 
        <h1 className='reveal delay-100 text-center text-[35px] sm:text-[35px] leading-tight md:text-[65px] xl:text-[65px]  md:tracking-normal  uppercase font-black'><span>Making</span><br /> <span className='text-[#ff512e]'>Good</span> <br /> <span className='text-[#ff512e]'>Designs</span> <br /> <span>Since</span> <br /> <span>2021</span> </h1>
        </div> 
      </div>

    </main>
  )
}