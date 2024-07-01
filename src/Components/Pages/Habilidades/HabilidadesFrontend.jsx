import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import Habilidad from './Habilidad';

const HabilidadesFrontend = () => (
  <>
    <h2 className="text-3xl font-bold mb-20">Habilidades Frontend</h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center">
      <div className="flex justify-center items-center">
        <a href="https://es.react.dev"><Habilidad icon={<FaReact className="text-6xl text-blue-500 transition-transform transform hover:scale-150 duration-500" />} name="React.js" /></a>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://nodejs.org/en"><Habilidad icon={<FaNodeJs className="text-6xl text-green-500 transition-transform transform hover:scale-150 duration-500" />} name="Node.js" /></a>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://es.wikipedia.org/wiki/HTML5"><Habilidad icon={<FaHtml5 className="text-6xl text-orange-500 transition-transform transform hover:scale-150 duration-500" />} name="HTML5" /></a>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://es.wikipedia.org/wiki/CSS"><Habilidad icon={<FaCss3Alt className="text-6xl text-blue-500 transition-transform transform hover:scale-150 duration-500" />} name="CSS3" /></a>
      </div>

      <div className="flex justify-center items-center">
        <a href="https://es.wikipedia.org/wiki/JavaScript"><Habilidad icon={<FaJs className="text-6xl text-yellow-500 transition-transform transform hover:scale-150 duration-500" />} name="JavaScript" /></a>
      </div>

    </div>
  </>
  );
  

export default HabilidadesFrontend