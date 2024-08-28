import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loader from "../components/Loader"

const BlogPage = () => {

    const [blog,setBlog] = useState({});
    const [loading,setLoading] = useState(true);

    const params = useParams();

    const handleBlog = async (req,res) => {
        try{
        const {data} = await axios.get(`https://personal-blog-ebon-nine.vercel.app/blogs/particularBlog/${params.id}`)
        if(data?.success){
            setBlog(data?.blog)
            console.log(blog);
            setLoading(false);
        }
    }catch(err){
        console.log(err);
        
    }
    }

    useEffect(() => {
        handleBlog()
        
    },[params.id])

    if(loading){
        return ( <Loader />)
    }else if(blog.length === 0){
        return (<h1>Blog not found</h1>)
    }else{
        return (
            <div className='mt-10 w-full flex flex-col items-center justify-center cursor-default'>
                <div className='w-full md:w-[60%]'>
                <h1 className='p-4 text-[#ff512e] font-black text-[15px] md:text-[20px]'>{blog.blogTitle}</h1>
                {
                    blog.blogContent.map((b,index) => {
                        if(b.highlight === 'normal'){
                            return (
                                <p key={index} className='text-white font-normal text-[10px] md:text-[15px] p-4'>{b.content}</p>
                            )
                        }else if(b.highlight === 'terminal'){
                            return (
                                <p key={index} className=' font-semibold rounded-md bg-[#ff512e] md:text-[15px] text-[10px] m-2 p-2 text-black'>{b.content}</p>
                            )
                        }else if(b.highlight === 'options'){
                            return (
                                <ul key={index}>
                                    {
                                        b.content.map((option,idx) => {
                                            return (
                                                <li key={idx}>{option}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                        else{
                            return (
                                <p key={index} className='text-white font-bold tracking-wider md:text-[15px] text-[10px] p-4'>{b.content}</p>
                            )
                        }
                    })
                }
                </div>
            </div>    
        )
    }
}

export default BlogPage