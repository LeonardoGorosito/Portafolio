import React from 'react'

const SobreMi = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-white mb-6">Sobre mí</h2>
        <p className="text-lg text-white mb-4">
          Hola, soy <strong>Leonardo Gorosito</strong>, programador frontend, actualmente estudiando backend.
        </p>
        <p className="text-lg text-white mb-4">
          Tengo experiencia en el desarrollo de interfaces de usuario utilizando tecnologías como React, Javascript nativo, html5, css3,Bootstrap y Tailwind CSS. Estoy ampliando mis habilidades para convertirme en un desarrollador full-stack, estudiando tecnologías backend como Node.js, Express y bases de datos SQL y NoSQL.
        </p>
        <p className="text-lg text-white mb-4">
          Me apasiona crear aplicaciones web intuitivas y eficientes, siempre enfocado en la experiencia del usuario. Disfruto resolviendo problemas complejos y aprendiendo nuevas tecnologías para mantenerme actualizado en este campo en constante evolución.
        </p>
       
        <p className="text-lg text-white">
          Puedes contactarme a través de mi correo <a href="mailto:leogorosito.lg@gmail.com" className="text-blue-500">leogorosito.lg@gmail.com</a> o en LinkedIn: <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-blue-500">linkedin.com/in/leonardogorosito</a>.
        </p>
      </div>
    </section>

  )
}

export default SobreMi