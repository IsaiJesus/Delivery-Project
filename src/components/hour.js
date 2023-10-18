import React from 'react';
import '../styles/littleComponents.css';

const Hour = ({hour}) => {
  return ( 
    <div className="box-alert">
      <p className="mb-2 text-hour"><i className="far fa-clock"></i>Horario: {hour}</p>
    </div>
  );
}

export default Hour;