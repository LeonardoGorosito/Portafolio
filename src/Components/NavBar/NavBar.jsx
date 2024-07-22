import React, { useState } from 'react'
import { FaFileAlt, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import Habilidades from '../Pages/Habilidades/Habilidades';




const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="p-4 bg-[#242424] text-[#ffffffd0] fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-[#ffffffd0] text-2xl font-bold hover:text-gray-400">
            <span className='animate-fade-down'>PORTAFOLIO</span>
          </Link>
          <span className="text-gray-400 text-lg ml-2 animate-fade-down">Leonardo Gorosito</span>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className='text-[#ffffffd0] focus:outline-none'>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'fixed inset-0 bg-[#242424] text-4xl animate-fade-left animate-delay-150 flex flex-col items-end justify-center gap-4 p-8 z-20 transition-transform  duration-500 ease-out transform translate-x-0' : 'hidden lg:flex-row lg:items-center gap-3'}`}>
          <Link to="/" className="text-[#ffffffd0] hover:text-gray-400" onClick={closeMenu}>INICIO</Link>
          <Link to="/SobreMi" className="text-[#ffffffd0] hover:text-gray-400" onClick={closeMenu}>SOBRE MÍ</Link>
          <Link to="/Habilidades" className="text-[#ffffffd0] hover:text-gray-400" onClick={closeMenu}>HABILIDADES</Link>
          <Link to="/Contacto" className="text-[#ffffffd0] hover:text-gray-400" onClick={closeMenu}>CONTACTO</Link>
          <div className="flex flex-col ml-10 lg:flex-row gap-2 mt-4 lg:mt-0">
            <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-[#ffffffd0] hover:text-gray-400 transform transition-transform duration-300 hover:scale-125">
              <button><FaLinkedin /></button>
            </a>
            <a href="https://github.com/LeonardoGorosito" className="text-[#ffffffd0] hover:text-gray-400 transform transition-transform duration-300 hover:scale-125">
              <button><FaGithub /></button>
            </a>
            <a href="https://www.instagram.com/goroo_leo/" className="text-[#ffffffd0] hover:text-gray-400 transform transition-transform duration-300 hover:scale-125">
              <button><FaInstagram /></button>
            </a>
            <a href="https://drive.google.com/file/d/1EUHmyqSjMV68a5rgWSRE1chvi0t40Ssj/view?usp=drive_link" className="text-[#ffffffd0] hover:text-gray-400 transform transition-transform duration-300 hover:scale-125">
              <button><FaFileAlt /></button>
            </a>
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}
    </nav>


)}

export default NavBar


