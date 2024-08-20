import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='h-[70px] w-full border-b-[1px] relative flex items-center justify-start  '>
        <h1 className='text-[50px] hover:text-transparent hover:bg-[#ff512e] duration-150 w-full ease-in-out uppercase'>{props.title}</h1>
        <h4 className='absolute text-transparent w-full hover:text-black hover:bg-[#ff512e] duration-150 ease-in-out  h-full flex items-center pl-3'>{props.topic}</h4>
    </div>
  )
}

export default SkillCard