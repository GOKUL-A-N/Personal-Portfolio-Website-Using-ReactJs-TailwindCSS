import React,{useState,useEffect,Suspense} from 'react'
import Home from './components/Home'
import About from './components/About'
import {Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Social from './components/Social'
import Loader from './components/Loader'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Logo from './components/Logo'
const Projects = React.lazy(() => import('./components/Projects'))

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
      <Social />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/works' element={
        <Suspense fallback={<Loader />}><Projects /></Suspense>
      } />
    </Routes>
    </div>
  )
}

export default App