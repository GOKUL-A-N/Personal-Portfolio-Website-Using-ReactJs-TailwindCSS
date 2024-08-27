import React,{useState,useEffect,Suspense} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Social from './components/Social'
import Loader from './components/Loader'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Logo from './components/Logo'
const Projects = React.lazy(() => import('./pages/Projects'))
import Blogs from './pages/Blogs'
import BlogPage from './pages/BlogPage'

const App = () => {

 
 
     const [loading,setLoading] = useState(true)

  useEffect(() =>{
    const fakeDataFetch = () => {
      setTimeout(() =>{
        setLoading(false)
      },5000)
    }

    fakeDataFetch();
  },[])

  return loading ? (
    <Loader />
  ) : (
    <div className='relative'>
      <div className='flex right-2 top-2 fixed z-40 overflow-x-auto'>
      <Navbar />
      </div>
      <div className='flex left-4 top-4 fixed z-40 invisible sm:visible'><Logo /></div>
     <div className='invisible md:visible'> <Social /></div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/works' element={
        <Suspense fallback={<Loader />}><Projects /></Suspense>
      } />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/blog/:id' element={<BlogPage />} />
    </Routes>
    </div>
  )
}

export default App