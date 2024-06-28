// import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import FotoPerfil from '../../Assets-img/FotoTest.jpg'

const Inicio = () => {
  return (

    <section id="inicio" className="container min-h-screen flex items-start justify-center pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-76 h-76 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src={FotoPerfil} alt='Foto LeoG'className='w-full h-full object-cover'/>
          </div>
        </div>

        <div className='container '>
        <div className="md:w-1/1 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold ml-7">Hola, soy Leonardo Gorosito.</h1>
          <p className="text-xl mt-4 ml-7">
          Soy un desarrollador web apasionado por la programación, especializado en JavaScript, React JS y diseño de interfaces de usuario. Disfruto creando aplicaciones web intuitivas y eficientes. Actualmente, estoy enfocado en estudiar Programación Backend para ampliar mis habilidades y conocimientos en el desarrollo de aplicaciones robustas y escalables.


          </p>

          <h2 className="text-3xl font-bold mt-4 ml-7">Introducción oersonal</h2>
          <p className="text-xl mt-4 ml-7">Soy un joven de 23 años que vive en Santa Fe, Argentina. Desde niño, siempre me apasionó la tecnología, lo que me llevó a estudiar en una escuela técnica especializada en Informática. En los últimos años, mi interés por la programación ha crecido enormemente. Disfruto creando soluciones innovadoras y resolviendo problemas complejos con código. Mi objetivo es seguir desarrollándome en este campo y participar en proyectos desafiantes que me permitan mejorar mis habilidades y contribuir al avance tecnológico.     
          </p>
          </div>


          
        </div>

        

      </div>
      
    </section>
      




  );
};
  

export default Inicio