import React from 'react';
import '../styles/navbar.css';
import Bars from './bars';
import Brand from './brand';
import Nav from './nav';
import Main from './main';

function Header() {
    
  return(
    <nav className="navbar navbar-expand-md bg-white fixed-top">
      <div className="container-fluid d-flex justify-content-around w-90">
        <Bars/>
        <Brand/>
        <Nav/>
        <Main/>
      </div>
    </nav>
  );
}

export default Header;