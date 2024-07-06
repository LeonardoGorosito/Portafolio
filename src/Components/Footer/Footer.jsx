import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from 'react-icons/io';
import { Link } from 'react-router-dom';





const Footer = () => {
  return (
    <footer className=" py-6">
      <div className="container mx-auto px-4 text-white flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <Link to='/' ><h2 className="text-2xl font-bold hover:text-gray-400">PORTAFOLIO</h2></Link>
          <Link to='/' ><p className="text-gray-400">Leonardo Gorosito</p></Link>
        </div>

        <div className="mt-4 ">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Leonardo Gorosito. Todos los derechos reservados.</p>
        </div>

        <div className="links flex mt-5 gap-2">
            <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-white hover:text-gray-400 text-2xl sm:text-lg">
              <FaLinkedin />
            </a>
            <a href="https://github.com/LeonardoGorosito" className="text-white hover:text-gray-400 text-2xl sm:text-lg">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/goroo_leo/" className="text-white hover:text-gray-400 text-2xl sm:text-lg">
              <FaInstagram />
            </a>
            <a href="/src/Assets-pdf/CURRICULUM VITAE.pdf" className="text-white hover:text-gray-400 text-2xl sm:text-lg">
              <IoIosDocument /> cv
            </a>
            

          </div>
      </div>
    </footer>
  
  )
}

export default Footer