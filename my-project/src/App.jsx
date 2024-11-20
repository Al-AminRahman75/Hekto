import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {

  let myRoute=createBrowserRouter(createRoutesFromElements(

    <Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-us' element={<About/>}/>
    </Route>

  ))

  return (
    <>
     <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
