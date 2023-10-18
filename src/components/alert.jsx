import React from 'react';
import '../styles/littleComponents.css';

const Alert = ({text}) => {
  return ( 
    <div className="box-alert">
      <p className="mb-2"><i className="fas fa-info-circle"></i>{text}</p>
    </div>
  );
}

export default Alert;