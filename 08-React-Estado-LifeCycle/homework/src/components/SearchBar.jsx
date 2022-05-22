import React, { useState } from "react";
import s from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
    <form className={s.contenedor} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={e => setCity(e.target.value)}
        value={city}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
