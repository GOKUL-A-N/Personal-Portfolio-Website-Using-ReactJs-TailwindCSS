import React,{Suspense} from 'react'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import {Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Social from './components/Social'
import Loader from './components/Loader'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Logo from './components/Logo'

const App = () => {

  // const [loading,setLoading] = useState(true)

  // useEffect(() =>{
  //   const fakeDataFetch = () => {
  //     setTimeout(() =>{
  //       setLoading(false)
  //     },5000)
  //   }

  //   fakeDataFetch();
  // },[])

  // return loading ? (
  //   <Loader />
  // ) : (
  //   <div className='relative'>
  //     <div className='flex right-2 top-2 fixed z-40'>
  //     <Navbar />
  //     </div>
  //     <div className='flex left-4 top-4 fixed z-40'><Logo /></div>
  //     <Social />
  //     <Routes>
  //     <Route path='/' element={<Home />} />
  //     <Route path='/about' element={<About />} />
  //     <Route path='/works' element={<Projects />} />
  //     <Route path='/skills' element={<Skills />} />
  //     <Route path='/contact' element={<Contact />} />
  //   </Routes>
  //   </div>
  return(
    <Suspense fallback={<Loader />}>
      <div className='relative'>
   <div className='flex right-2 top-2 fixed z-40'>
    <Navbar />
    </div>
    <div className='flex left-4 top-4 fixed z-40'><Logo /></div>
     <Social />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/works' element={<Projects />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     </div>
    </Suspense>
  )
}

export default App