import React,{Suspense} from 'react'
import { MdOutlineHorizontalRule } from "react-icons/md";
import project1Img from "../assets/project1Img.png";
import project2Img from "../assets/project2Img.png";
import project3Img from "../assets/project3Img.png";
import project5Img from "../assets/project5Img.png";
import EducateUImg from "../assets/EducateUImg.png";
import bikeServiceImg from "../assets/bikeServiceImg.png"
import chatBot from "../assets/chatBot.png"
import Loader from './Loader';

const Projects = () => {
  return (
    <Suspense fallBack={<Loader />}>
      <div className='flex mt-20 mb-10 flex-col  md:items-right relative md:justify-end text-[#ddd] sm:items-start h-screen sm:h-auto w-full md:flex-row'>
        <div className="w-full md:w-[50%] p-10 md:p-20 md:fixed md:left-0">
        <h1 className='text-[30px]  md:text-[40px] text-white  text-start font-bold z-10'>Works</h1>
        <p className='text-[20px] flex sm:w-2/4 md:text-[25px] font-normal text-tertiary z-10'> 
          <span className='font-bold mt-1 text-white '><MdOutlineHorizontalRule size={40} /></span>
          <span className='text-white'>All honest designs are good but not all good designs are honest</span>
        </p>
          
        </div>
        <div className="w-full md:w-[50%] p-2 mt-10 mb-20 ">
            <table className='border-2 w-full border-tertiary  overflow-y-scroll'>
                <tr className='w-full'> 
                  <td className='relative h-full w-1/2'>
                    <h6 className='absolute bottom-3 font-semibold tracking-wider text-[#ddd] pl-3'>ChatBot</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>01</h2>
                  </td>
                  <a href="https://github.com/GOKUL-A-N/ChatBot"><td className='w-1/2'><img src={chatBot} alt="ChatBot" /></td></a>
                </tr>

                <tr className='w-full'>
                  <a href="https://educateu-mt3gf8d9u-gokul-a-n.vercel.app/"><td className='w-1/2'><img src={EducateUImg} alt="E-Learning Website" /></td></a>
                  <td className='relative h-full w-full'>
                    <h6 className='absolute bottom-3 xs:font-semibold tracking-wider text-[#ddd] pl-3'>EducateU</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>02</h2>
                  </td>
                </tr>

                <tr className='w-full'>
                  
                  <td className='relative h-full w-1/2'>
                    <h6 className='absolute bottom-3 font-semibold tracking-wider text-[#ddd] pl-3'>CodePrep</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>03</h2>
                  </td>
                  <a href="https://github.com/GOKUL-A-N/codeprep"><td className='w-1/2'><img src={project2Img} alt="DSA Preparation Platform" /></td></a>
                </tr>

                <tr className='w-full'>
                  <a href="https://github.com/GOKUL-A-N/Devconvo"><td className='w-1/2'><img src={project3Img} alt="Blog Website" /></td></a>
                  <td className='relative h-full w-full'>
                    <h6 className='absolute bottom-3 font-semibold tracking-wider text-[#ddd] pl-3'>Devconvo</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>04</h2>
                  </td>
                </tr>
                
                <tr className='w-full'>
                  <td className='relative h-full w-1/2'>
                    <h6 className='absolute bottom-3 font-semibold tracking-wider text-[#ddd] pl-3'>FitGuild</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>05</h2>
                  </td>
                  <a href="https://fit-guild-01-gokul-a-n.vercel.app/"><td className='w-1/2'><img src={project1Img} alt="Fitness Website" /></td></a>
                </tr>

                <tr className='w-full'>
                  <a href="https://hoo-bank-gokul-a-n.vercel.app/"><td className='w-1/2'><img src={project5Img} alt="Credit card Website" /></td></a>
                  <td className='relative h-full w-full'>
                    <h6 className='absolute bottom-3 font-semibold tracking-wider text-[#ddd] pl-3'>HooBank</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>06</h2>
                  </td>
                </tr>

                <tr className='w-full'>
                  <td className='relative h-full w-1/2'>
                    <h6 className='absolute bottom-3 font-semibold tracking-wider text-[#ddd] pl-3'>Bike Service Application</h6>
                    <h2 className='absolute right-1 bottom-3 pr-4 text-tertiary xs:text-[30px] font-bold'>07</h2>
                  </td>
                  <a href="https://github.com/GOKUL-A-N/Bike-Service-Application"><td className='w-1/2'><img src={bikeServiceImg} alt="" /></td></a>
                </tr>
            </table>
        </div>
    </div>
    </Suspense>
    
  )
}

export default Projects