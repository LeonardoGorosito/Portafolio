import React from 'react'
import { FcProcess } from 'react-icons/fc';
import { IoLogoFirebase } from 'react-icons/io5';
import Habilidad from './Habilidad';
import { Link } from 'react-router-dom';
import { FaNodeJs } from 'react-icons/fa';

const HabilidadesBackend = () => (
  <>
  <h2 className="text-3xl font-bold mb-20">Habilidades Backend</h2>
    
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center  ">

      <div className="flex justify-center  items-center">
        <a href="https://firebase.google.com/?hl=es"><Habilidad icon={<IoLogoFirebase className="text-6xl transition-transform transform hover:scale-150 duration-500 text-orange-400" />} name="Firebase" /></a>
      </div>

      <div className="flex justify-center items-center">
        <a href="https://nodejs.org/en"><Habilidad icon={<FaNodeJs className="text-6xl text-green-500 transition-transform transform hover:scale-150 duration-500" />} name="Node.js" /></a>
      </div>

      <div className="flex justify-center items-center">
        <a href=''><Habilidad icon={<FcProcess className="text-6xl transition-transform transform hover:scale-150 duration-500" />} name="En proceso..." /></a>
      </div>

      </div>

</>
  );
  

export default HabilidadesBackend