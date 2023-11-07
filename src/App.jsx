import React, { useState } from 'react';
import './App.css';
import Formulario from './formulario';
import Tarjeta from './tarjeta';


function App() {
  const [datosPersonales, setDatosPersonales] = useState(null);

  const handleFormSubmit = (datos) => {
    setDatosPersonales(datos);
  };

  return (
    <div className="App">
      <h1>Generador de Tarjetas de Presentación</h1>
      <Formulario onFormSubmit={handleFormSubmit} />
      {datosPersonales && <Tarjeta {...datosPersonales} />}
    </div>
  );
}

export default App;
