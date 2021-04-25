import React from 'react';
import '../styles/littleComponents.css';

const Filter = ({filter, initialId, finalId, value, handleChange}) => {

  return ( 
    <div className="container-select">
      <p>Filtrar por:</p>
      <select value={value} onChange={handleChange}>
        {filter.slice(initialId, finalId).map(data => (
          <option key={data.id} value={data.category}>{data.text}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;