import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import Habilidades from '../Pages/Habilidades/Habilidades';
import { IoIosDocument } from 'react-icons/io';


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (

    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold hover:text-gray-400"><span>PORTAFOLIO</span></Link>
          <Link to="/" className="text-gray-400 text-lg ml-2"><span>Leonardo Gorosito</span></Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className={`lg:flex gap-3 ${isOpen ? 'flex flex-col z-20 fixed h-screen w-1/3 top-0  text-4xl max-h-full right-4 bg-gray-950 gap-4 bottom-0 text-right transition-transform duration-300 ease-in-out transform translate-x-0' : 'hidden'} lg:flex-row`}>
          <Link to="/" className="text-white hover:text-gray-400" onClick={closeMenu}>INICIO</Link>
          <Link to="/SobreMi" className="text-white hover:text-gray-400" onClick={closeMenu}>SOBRE MÍ</Link>
          {/* <Link to="/Proyectos" className="text-white hover:text-gray-400" onClick={closeMenu}>Proyectos</Link> */}
          <Link to="/Habilidades" className="text-white hover:text-gray-400" onClick={closeMenu}>HABILIDADES</Link>
          <Link to="/Contacto" className="text-white hover:text-gray-400" onClick={closeMenu}>CONTACTO</Link>
          
          
          
            
          
      </div>


        <div className={`lg:flex ${isOpen ? 'hidden' : 'hidden'} flex-col lg:flex-row gap-2`}>
          <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-white hover:text-gray-400"><button><FaLinkedin /></button></a>
          <a href="https://github.com/LeonardoGorosito" className="text-white hover:text-gray-400"><button><FaGithub /></button></a>
          <a href="https://www.instagram.com/goroo_leo/" className="text-white hover:text-gray-400"><button><FaInstagram /></button></a>
          <a href="https://drive.google.com/file/d/1EUHmyqSjMV68a5rgWSRE1chvi0t40Ssj/view?usp=drive_link" className="text-white hover:text-gray-400 text-2xl sm:text-lg">
              <IoIosDocument />cv
            </a>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}
    </nav>
)}

export default NavBar
