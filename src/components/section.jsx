import React from 'react';
import '../styles/section.css';

const Section = ({props}) => {
  return ( 
    <div className="section h-100 text-center">
      <h1>{props.title}</h1>
    </div>
  );
}

export default Section;