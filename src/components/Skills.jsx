import React from 'react'
import SkillCard from './SkillCard'
import globe from "../assets/globe.png"

const Skills = () => {


  const skillDetails = [
    {
      title: "Full",
      topic: "FrontEnd : HTML5 / CSS3 / Javascript / TailwindCss / ReactJs"
    },
    {
      title: "Stack",
      topic: "BackEnd : NodeJs / ExpressJs / Java / Spring Boot"
    },
    {
      title: "Web",
      topic: "Database : MongoDB / MySQL"
    },
    {
      title: "Developer",
      topic: "DevOps : Github / Git / Vercel / Figma / Postman"
    }
  ]

  return (
    <div className='relative'>
      <div className='absolute h-screen w-full invisible md:visible -z-20'>
        <img src={globe} className='h-screen w-auto' alt="globe image" />
      </div>
      <div className='h-screen w-full flex items-center justify-center cursor-default'>
        <div className='h-auto w-[98%] sm:w-[89%] md:w-[75%]'>
          <h1 className='uppercase text-[#ddd] tracking-widest font-normal'>What i do</h1>
          <div className='text-[#ddd]'>
          {
            skillDetails.map((skill,index) =>
            {
              return (
                <SkillCard 
                  title={skill.title}
                  topic={skill.topic}
                />
              )
            }
            )
          }
          </div>
        </div>
    </div>
    </div>
  )
}

export default Skills