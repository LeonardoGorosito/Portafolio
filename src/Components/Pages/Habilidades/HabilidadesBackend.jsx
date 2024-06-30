import React from 'react'
import { FcProcess } from 'react-icons/fc';
import { IoLogoFirebase } from 'react-icons/io5';
import Habilidad from './Habilidad';

const HabilidadesBackend = () => (
  <>
  <h2 className="text-3xl font-bold mb-8">Habilidades Backend</h2>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-items-center  ">
    <Habilidad icon={<IoLogoFirebase className="text-6xl text-orange-400" />} name="Firebase" />
    <Habilidad icon={<FcProcess className="text-6xl" />} name="En proceso..." />
  </div>
</>
  );
  

export default HabilidadesBackend