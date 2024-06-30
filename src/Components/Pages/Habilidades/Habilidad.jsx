import React from 'react'

    const Habilidad = ({ icon, name }) => (
        <div className="flex flex-col items-center">
          {icon}
           <p className="mt-2">{name}</p>
        </div>
    );

export default Habilidad



  