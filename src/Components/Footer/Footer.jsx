import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4 text-white flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <Link to='/' ><h2 className="text-2xl font-bold hover:text-gray-400">PORTAFOLIO</h2></Link>
          <Link to='/' ><p className="text-gray-400">Leonardo Gorosito</p></Link>
        </div>
        


        <div className="mt-4 md:mt-0">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Leonardo Gorosito. Todos los derechos reservados.</p>
        </div>

        <div className="links flex gap-2">

            <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-white hover:text-gray-400"><button>< FaLinkedin /></button></a>
            <a href="https://github.com/LeonardoGorosito" className="text-white hover:text-gray-400"><button>< FaGithub /> </button></a>
            <a href="https://www.instagram.com/goroo_leo/" className="text-white hover:text-gray-400"><button>< FaInstagram /> </button></a>

        </div>
      </div>
    </footer>
  
  )
}

export default Footer