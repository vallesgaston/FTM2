import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type='text' />
      <button onClick={() => props.onSearch('Agregando ciudad...')}>Agregar</button>
    </div>
  )
};