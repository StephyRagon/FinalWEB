import React from 'react';
import imagen from './assets/flor.png';

const Tarjeta = ({ nombre, apellido, email, edad }) => {
  return (
    <div className="tarjeta">
        <img src={imagen} alt="Avatar" className='imagen' />
      <h2>Tarjeta de Presentación</h2>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Email: {email}</p>
      <p>Edad:{edad}</p>

    </div>
  );
};

export default Tarjeta;
