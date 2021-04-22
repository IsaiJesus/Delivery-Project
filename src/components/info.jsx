import React from 'react';
import '../styles/info.css';

const Info = ({props}) => {
  return ( 
    <div className="box-info">
      <p className="mb-2"><i className="fas fa-info-circle"></i>{props.text}</p>
    </div>
  );
}

export default Info;