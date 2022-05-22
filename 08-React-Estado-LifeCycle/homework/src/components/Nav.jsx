import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <>
      <div className = {s.header} >
        <img src={Logo} alt="Logo" />
        <h2>Henry - Weather App</h2>
        <SearchBar onSearch={onSearch}/>
      </div>
      
    </>
  );
};

export default Nav;
