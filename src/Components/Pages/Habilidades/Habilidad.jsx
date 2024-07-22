import React from 'react'

    const Habilidad = ({ icon, name }) => (
            <div className="w-full overflow-x-hidden ">
                <div className="flex flex-col items-center">
            {icon}
            <p className="mt-2">{name}</p>
            </div>
        </div>
    );

export default Habilidad



  