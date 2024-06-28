import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import Habilidades from '../Pages/Habilidades';


const NavBar = () => {
  return (

    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold hover:text-gray-400"><span>PORTAFOLIO</span></Link>

          <Link to="/" className="text-gray-400 text-lg ml-2"><span>Leonardo Gorosito</span></Link>
        </div>

        <div className="flex space-x-4">

            <Link to="/" className="text-white hover:text-gray-400">Inicio</Link>
            <Link to="/SobreMi" className="text-white hover:text-gray-400">Sobre mí</Link>
            <Link to="/Proyectos" className="text-white hover:text-gray-400">Proyectos</Link>
            <Link to="/Habilidades" className="text-white hover:text-gray-400">Habilidades</Link>
            <Link to="/Contacto" className="text-white hover:text-gray-400">Contacto</Link>
            
            
            

        </div>

        <div className="links flex gap-2">

            <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-white hover:text-gray-400"><button>< FaLinkedin /></button></a>
            <a href="https://github.com/LeonardoGorosito" className="text-white hover:text-gray-400"><button>< FaGithub /> </button></a>
            <a href="https://www.instagram.com/goroo_leo/" className="text-white hover:text-gray-400"><button>< FaInstagram /> </button></a>

        </div>
      </div>
    </nav>
)}

export default NavBar
