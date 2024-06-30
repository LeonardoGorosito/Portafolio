import React from 'react'

const Contacto = () => {
  return (
    <section id="contacto" className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form className="max-w-lg mx-auto bg-slate-500 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Nombre</label>
            <input type="text" id="name" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Mensaje</label>
            <textarea id="message" className="w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    </section>

  )
}

export default Contacto