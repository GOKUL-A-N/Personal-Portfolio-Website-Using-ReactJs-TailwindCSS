import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = (props) => {

  const navigate = useNavigate()

  const handleChange = () => {
    localStorage.setItem('blogId',props.id)
    navigate(`/blog/${props.id}`)
  }


  return (
    <div className='bg-[#222] w-[300px] h-[130px] rounded-md relative cursor-default'>
      <h1 className='text-white text-[15px] p-3'>{props.title}</h1>
      <button className='m-3  rounded-full h-[20px] w-[20px] text-[#ff512e] absolute right-2 bottom-2' onClick={handleChange}><i class="fa-solid fa-square-arrow-up-right w-full h-full"></i></button>
    </div>
  )
}

export default BlogCard