import React from 'react'
import { FaNetworkWired } from 'react-icons/fa';
import { MdDetails, MdLocalActivity, MdOutlineSyncProblem } from 'react-icons/md';
import { RiKakaoTalkFill } from 'react-icons/ri';
import Habilidad from './Habilidad';

const HabilidadesBlandas = () => (
  <>
  <h2 className="text-3xl font-bold mt-8 mb-8">Habilidades Blandas</h2>
  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">
    <Habilidad icon={<RiKakaoTalkFill className="text-6xl" />} name="Comunicación efectiva" />
    <Habilidad icon={<FaNetworkWired className="text-6xl" />} name="Trabajo en equipo" />
    <Habilidad icon={<MdOutlineSyncProblem className="text-6xl" />} name="Resolución de problemas" />
    <Habilidad icon={<MdLocalActivity className="text-6xl" />} name="Adaptación rápida" />
    <Habilidad icon={<MdDetails className="text-6xl" />} name="Atención al detalle" />
  </div>
</>
  );
  

export default HabilidadesBlandas