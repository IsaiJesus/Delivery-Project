import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/littleComponents.css';

const ButtonLink = ({link, text}) => {
  return ( 
    <Link to={link} className="btn btn-green my-4">{text}</Link>
  );
}

export default ButtonLink;