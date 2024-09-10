// components/CedulaField.js
import React, { useState } from 'react';

function CedulaField() {
  const [cedula, setCedula] = useState('');

  const handleCedulaChange = (event) => {
    setCedula(event.target.value);
  };

  return (
    <div>
      <label htmlFor="cedula">Cédula:</label>
      <input
        type="text"
        id="cedula"
        name="cedula"
        value={cedula}
        onChange={handleCedulaChange}
      />
    </div>
  );
}

export default CedulaField;