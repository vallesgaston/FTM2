import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
        cities.map(p => (<Card 
          key={p.id}
          max={p.main.temp_max}
          min={p.main.temp_min}
          name={p.name}
          img={p.weather[0].icon}
          onClose={() => alert(p.name)}
          />))
      }
    </div>
  )
};