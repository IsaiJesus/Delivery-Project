import React from 'react';
import '../styles/littleComponents.css';

const Filter = ({filter, initialId, finalId, value, handleChange}) => {

  return ( 
    <div className="container-select">
      <p>Filtrar por:</p>
      <select value={value} onChange={handleChange}>
        {filter.slice(initialId, finalId).map(dataFromTiendas => (
          <option key={dataFromTiendas.id} value={dataFromTiendas.category}>{dataFromTiendas.text}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;