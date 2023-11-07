import React, { useState } from 'react';

const Formulario = ({ onFormSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ nombre, apellido, email, edad});
  };

  return (
    <div className="formulario">
      <h2>Ingresa tus datos personales:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
           type='number'
           placeholder='Edad'
           value={edad}
           onChange={(e)=> setEdad(e.target.value)}
        />
        <button type="submit">Generar Tarjeta</button>
      </form>
    </div>
  );
};

export default Formulario;
