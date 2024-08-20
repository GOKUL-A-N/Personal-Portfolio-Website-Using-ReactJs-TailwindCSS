import React from 'react'
import ExperienceCard from './ExperienceCard'

const Experience = () => {

    const experiences = [
        {
            year: "now",
            course: "B.E Computer Science and Engineering",
            institute: "Hindusthan College Of Engineering and Technology",
            secret: "Self Taught web developer"
        },
        {
            year: "2021",
            course: "HSE",
            institute: "Saratha Matric Hr Sec School",
            secret: "Can develop what my 15' inch laptop can produce"
        },
        {
            year: "2019",
            course: "SSLC",
            institute: "Bharathi Vidhyalaya Matric Hr Sec School",
            secret: "Semicolon is better than indentation"
        }
    ]

  return (
    <div className='md:w-[75%] sm:w-[85%] w-[95%]'>
        <h1 className='text-[#ddd] tracking-widest font-normal'>HISTORY</h1>
        <div>
            {
                experiences.map((experience,index) => {
                    return (
                        <ExperienceCard
                            year={experience.year}
                            course={experience.course}
                            institute={experience.institute}
                            secret={experience.secret}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Experience