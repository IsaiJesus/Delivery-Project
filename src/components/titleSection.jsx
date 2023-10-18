import React from 'react';
import '../styles/littleComponents.css';

const TitleSection = ({title}) => {
  
  return ( 
    <div className="title h-100 text-center">
      <h1>{title}</h1>
    </div>
  );
}

export default TitleSection;