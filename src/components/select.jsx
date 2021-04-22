import React from 'react';
import '../styles/select.css';

const Select = ({props, initialId, finalId, valor, handleChange}) => {

  return ( 
    <div className="container-select">
      <p>Filtrar por:</p>
      <select value={valor} onChange={handleChange}>
        {props.slice(initialId, finalId).map(filter => (
          <option key={filter.id} value={filter.category}>{filter.text}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;