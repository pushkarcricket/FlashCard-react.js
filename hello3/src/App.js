import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import './Login.css'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      </BrowserRouter>
      
      
      </div>
  )
}

export default App;