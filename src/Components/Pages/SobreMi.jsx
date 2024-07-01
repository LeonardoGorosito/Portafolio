import React from 'react'
import FotoPerfil from '../../Assets-img/FotoTest.jpg'

const SobreMi = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 lg:px-20">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sobre mí</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">

          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img 
              src= {FotoPerfil} 
              alt="Foto de Leonardo Gorosito" 
              className="rounded-3xl w-100 h-100 object-cover mx-auto lg:mx-0"
            />
          </div>
          
          <div className="lg:w-2/3 lg:pl-12">
            <p className="text-lg text-white mb-4">
              Hola, soy <strong>Leonardo Gorosito</strong>, programador frontend, actualmente estudiando backend.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-4">Educación</h3>
            <p className="text-lg text-white mb-4">
              Me recibí de <strong>Técnico en Informática</strong> en la Escuela Superior Técnica Dr. Nicolás Avellaneda Nº478 de la ciudad de Santa Fe. Allí adquirí una sólida base de conocimientos en desarrollo de software, redes y sistemas operativos.
            </p>

            <p className="text-lg text-white mb-4">
              Tengo experiencia en el desarrollo de interfaces de usuario utilizando tecnologías como React, Javascript nativo, HTML5, CSS3, Bootstrap y Tailwind CSS. Estoy ampliando mis habilidades para convertirme en un desarrollador full-stack, estudiando tecnologías backend como Node.js, Express y bases de datos SQL y NoSQL.
            </p>
            <p className="text-lg text-white mb-4">
              Me apasiona crear aplicaciones web intuitivas y eficientes, siempre enfocado en la experiencia del usuario. Disfruto resolviendo problemas complejos y aprendiendo nuevas tecnologías para mantenerme actualizado en este campo en constante evolución.
            </p>

            <p className="text-lg text-white mb-4">
              Estoy cursando la carrera de <strong>Desarrollador web Full Stack</strong> en la Academia CoderHouse, donde he aprendido una base de conocimientos en aplicaciones web, desarrollo fronend y en proceso Desarrollo Backend.
            </p>

            <p className="text-lg text-white mb-4">
              Estoy por empezar en la carrera de <strong>Ingeniería en Informática</strong> en la Universidad Nacional del Litoral (UNL) Stanta Fe, Argentina, donde pretendo reforzar mis conocimientos y expandirlos.
            </p>
        
          </div>
        </div>
        
          <div className='pb-1 '>
        <h3 className="text-2xl font-bold text-white mb-4">Intereses Personales</h3>
            <p className="text-lg text-white mb-4">
              Cuando no estoy codificando, disfruto de actividades como jugar videojuegos, protramar y/o crear mods, jugar al fútbol con amigos y explorar nuevas tecnologías.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Anécdota Profesional</h3>
            <p className="text-lg text-white mb-4">
              Uno de los desafíos más emocionantes que he enfrentado fue cuando trabajé en un proyecto de e-commerce que requirió integrar APIs y asegurar una experiencia de usuario fluida. Esta experiencia no solo mejoró mis habilidades técnicas, sino que también me enseñó la importancia de la comunicación efectiva.
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Salud Médica</h3>
            <p className="text-lg text-white mb-4">
              En 2021, fui diagnosticado con un germinoma en la parte pineal de mi cabeza. Este tumor me hizo perder la mitad de mi visión y pasé por tratamientos de radioterapia y quimioterapia. A pesar de estos desafíos, nunca dejé que me detuvieran en mi sueño de ser programador. Aunque hago las cosas un poco más lento ahora, me aseguro de que cada detalle sea perfecto. Esta experiencia me ha enseñado la importancia de la resiliencia y el cuidado personal, y ha fortalecido mi determinación de seguir adelante en mi carrera.
            </p>
          </div>

        </div>
    </section>

  )
}

export default SobreMi