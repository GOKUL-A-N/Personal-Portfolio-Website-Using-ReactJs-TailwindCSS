import React from 'react'

const ExperienceCard = (props) => {
  return (
    <div className='w-full h-[90px] border-b-[1px] text-[#ddd] hover:bg-[#ff512e] center-top-bottom transition-colors duration-200 ease-in-out hover:text-[#ff512e] border-[#333] flex justify-between cursor-default relative'>
        <div className='flex items-center justify-center font-black  text-[10px]  md:text-[35px]'>
            <h1>{props.year}</h1>
        </div>
        <div className='flex items-end justify-center font-black text-[10px] md:text-[30px] flex-col '>
            <h1 className='text-right text-[15px] md:text-[20px]'>{props.course}</h1>
            <p className='md:text-[11px] text-[7px] font-thin '>{props.institute}</p>
        </div>
        <div className='absolute  left-5 flex items-start justify-start h-full w-full'>
          <h1 className=' text-transparent text-end text-[7px] md:text-[14px]  flex items-center justify-start h-full w-full hover:visible hover:text-black'>{props.secret}</h1>
        </div>
    </div>
  )
}

export default ExperienceCard