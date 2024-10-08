import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './compnents/Header'
import Projects from './pages/Projects'
import Footercomp from './compnents/Footercomp'
import './App.css'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route element={<PrivateRoute/>}>

        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <Footercomp/>
    </BrowserRouter>
  )
}

export default App
