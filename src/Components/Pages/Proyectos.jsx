import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Proyectos = () => {
  return (
    <section id="proyectos" className=" py-12">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold mb-8">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center my-32">

          <div className="max-w-xl w-1/2 bg-white
           m-4 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-2">Proyecto 1</h3>
            <p className="text-gray-700 mb-4">Descripción breve del proyecto.</p>
            <a href="https://example.com" className="text-blue-500 hover:underline">Ver más</a>
            <a href='#'><span className='fixed text-black ml-20 mt-6'><FaGithub/></span></a>
          </div>

          <div className="max-w-xl w-1/2 bg-white  m-4 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-2">Proyecto 2</h3>
            <p className="text-gray-700 mb-4">Descripción breve del proyecto.</p>
            <a href="https://example.com" className="text-blue-500 hover:underline">Ver más</a>
            <a href='#'><span className='fixed text-black ml-20 mt-6'><FaGithub/></span></a>
          </div>

          <div className="max-w-xl w-1/2 bg-white m-4 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-black mb-2">Proyecto 3</h3>
            <p className="text-gray-700 mb-4">Descripción breve del proyecto.</p>
            <a href="https://example.com" className="text-blue-500 hover:underline">Ver más</a>
            <a href='#'><span className='fixed text-black ml-20 mt-6'><FaGithub/></span></a>
          </div>

          
          <div className="max-w-xl w-1/2 bg-white m-4 p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-black font-bold mb-2">Proyecto 4</h3>
            <p className="text-gray-700 mb-4">Descripción breve del proyecto.</p>
            <a href="https://example.com" className="text-blue-500 hover:underline">Ver más</a>
            <a href='#'><span className='fixed text-black ml-20 mt-6'><FaGithub/></span></a>
          </div>



        </div>
      </div>


    </section>

  )
}

export default Proyectos