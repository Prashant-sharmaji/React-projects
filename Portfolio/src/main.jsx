import {StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/main/Home.jsx'
import Services from './component/main/Services.jsx'
import About from './component/main/About.jsx'
import Hireme from './component/main/Hireme.jsx'
import Contact from './component/main/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element= {<App/>}>

    <Route path='/' element={<Home/>} />
    <Route path='services' element={<Services/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='about' element={<About/>} />
    <Route path='hireme' element={<Hireme/>} />
  </Route>

  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
