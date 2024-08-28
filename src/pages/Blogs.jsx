import React,{useEffect,useState} from 'react'
import axios from 'axios'
import BlogCard from '../components/BlogCard'
import Loader from '../components/Loader'

const Blogs = () => {

    const [blogs,setBlogs] = useState([])
    const [loading,setLoading] = useState(true);

    const getAllBlogs = async () => {
        try{
            const {data} = await axios.get(`https://personal-blog-ebon-nine.vercel.app/blogs/showBlog`)

            if(data?.success){
                setBlogs(data?.blog)
                setLoading(false)
                console.log(data?.blog);
                
            }
        }catch(err){
            console.log(err);
            
        }
    }

    useEffect(() => {
        getAllBlogs();
    },[])

  if(loading){
    return ( <Loader />)
  }else{
    return (
        <div className='w-full flex mt-20 items-center  justify-center flex-col cursor-default'>
            <div className='w-[98%] md:w-[85%]'>
                <h1 className='text-[#ddd] tracking-widest font-normal uppercase'>Blogs</h1>
                <div className='p-0 md:p-5 flex flex-wrap gap-3'>
                    {
                        blogs.map((blog,index) => {
                            return (
                                <BlogCard
                                    key={index}
                                    title={blog.blogTitle}
                                    id={blog._id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
      )
  }
}

export default Blogs