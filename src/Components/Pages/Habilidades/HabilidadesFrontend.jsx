import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import Habilidad from './Habilidad';

const HabilidadesFrontend = () => (
  <>
  <h2 className="text-3xl font-bold mb-8">Habilidades Frontend</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
    <Habilidad icon={<FaReact className="text-6xl text-blue-500" />} name="React.js" />
    <Habilidad icon={<FaNodeJs className="text-6xl text-green-500" />} name="Node.js" />
    <Habilidad icon={<FaHtml5 className="text-6xl text-orange-500" />} name="HTML5" />
    <Habilidad icon={<FaCss3Alt className="text-6xl text-blue-500" />} name="CSS3" />
    <Habilidad icon={<FaJs className="text-6xl text-yellow-500" />} name="JavaScript" />
  </div>
</>
  );
  

export default HabilidadesFrontend