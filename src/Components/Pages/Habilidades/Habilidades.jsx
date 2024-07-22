import React from 'react'
import HabilidadesBackend from './HabilidadesBackend';
import HabilidadesBlandas from './HabilidadesBlandas';
import HabilidadesFrontend from './HabilidadesFrontend';


    const Habilidades = () => {
      return (
        <section id="Habilidades" className="py-24 animate-fade-down animate-once animate-delay-100">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <HabilidadesFrontend />
          </div>
          <div>
            <HabilidadesBackend />
          </div>
        </div>
        <HabilidadesBlandas />
      </div>
    </section>
      );
    };

export default Habilidades