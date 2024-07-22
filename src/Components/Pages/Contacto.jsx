import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../Firebase/Firebase'

const Contacto = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setSuccess(false);
  
      try {
        await addDoc(collection(db, 'contacts'), {
          name,
          email,
          message,
          timestamp: new Date(),
        });
        setLoading(false);
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.error("Error adding document: ", error);
        setLoading(false);
      }
    };

    return (
      <section id="contacto" className="py-20 animate-fade-down animate-once animate-delay-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mt-10 mb-8">Contacto</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-black p-8 rounded-lg shadow-md ">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Nombre</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">Mensaje</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-blue-500  text-white py-2 px-4 rounded-lg hover:bg-blue-700" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {success && <p className="text-green-500 mt-4">Mensaje enviado con éxito!</p>}


          </form>


          <p className="text-lg text-white mx-auto mt-20 mb-20 text-center">
            Puedes contactarme a través de mi correo <a href="mailto:leogorosito.lg@gmail.com" className="text-blue-500">leogorosito.lg@gmail.com</a> o en LinkedIn: <a href="https://www.linkedin.com/in/leonardo-ezequiel-gorosito-9bb5a5182/" className="text-blue-500">linkedin.com/in/leonardogorosito</a>.
          </p>
        </div>
      </section>
  )
}

export default Contacto