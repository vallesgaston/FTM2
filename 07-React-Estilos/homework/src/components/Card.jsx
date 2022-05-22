import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return (
    <div className={s.card}>
      <button className={s.boton} onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div className={s.temperatura}>
        <div>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='clima'/>
        </div>
        
      </div>
    </div>
  )
};