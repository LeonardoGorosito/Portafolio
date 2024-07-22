// import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import FotoPerfil from '../../Assets-img/FotoTest2.jpg'

const Inicio = () => {
  return (

    <>
      <section id="inicio" className="container min-h-full flex items-center justify-center lg:pl-20 py-20 animate-fade-down animate-once animate-delay-100">
        <div className="mx-auto px-4 flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="relative   rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img src={FotoPerfil} alt="Foto LeoG" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center ml-5 items-center lg:items-start">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 ">Hola, soy Leonardo Gorosito.</h1>
            <p className="text-xl lg:text-2xl mb-4">
              Soy un desarrollador web apasionado por la programación, especializado en JavaScript, React JS y diseño de interfaces de usuario. Disfruto creando aplicaciones web intuitivas y eficientes. Actualmente, estoy enfocado en estudiar Programación Backend para ampliar mis habilidades y conocimientos en el desarrollo de aplicaciones robustas y escalables.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Introducción personal</h2>
            <p className="text-xl lg:text-2xl mb-4">
              Soy un joven de 23 años que vive en Santa Fe, Argentina. Desde niño, siempre me apasionó la tecnología, lo que me llevó a estudiar en una escuela técnica especializada en Informática. En los últimos años, mi interés por la programación ha crecido enormemente. Disfruto creando soluciones innovadoras y resolviendo problemas complejos con código. Mi objetivo es seguir desarrollándome en este campo y participar en proyectos desafiantes que me permitan mejorar mis habilidades y contribuir al avance tecnológico.
            </p>
          </div>
        </div>
      </section>
    </>
      




  );
};
  

export default Inicio