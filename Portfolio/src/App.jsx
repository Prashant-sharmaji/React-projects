import { useState } from 'react'
 
  
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Outlet/>
     <Footer/>
    </>
  )
}

export default App
