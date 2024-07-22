import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Components/Pages/Inicio'
import SobreMi from './Components/Pages/SobreMi'
import Proyectos from './Components/Pages/Proyectos'
import Contacto from './Components/Pages/Contacto'
import Habilidades from './Components/Pages/Habilidades/Habilidades'
import Nada from './Components/Pages/Nada'
import { Analytics } from '@vercel/analytics/react'




const App = () => {
  return (
    <div className='app'>
      <Analytics/>
    <BrowserRouter>

     <NavBar/>

      <Routes>
        <Route path='/' element= {<Inicio/>}/>
        <Route path='/SobreMi' element={<SobreMi/>}/>
        <Route path='/Proyectos' element={<Proyectos/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Habilidades' element={<Habilidades/>}/>
        <Route path='/' element={<Footer/>}/>
        <Route path='/Nada'element={<Nada/>}/>
        

      </Routes>
    

    <Footer/>

    </BrowserRouter>


      
    </div>
  )
}

export default App  



