import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Brand() {

  return(
      <Link to="/" className="navbar-brand">
        <img width="100" src="/images/tree-logo.png" alt="ORDEEM"/>
      </Link>
);
}

export default Brand;