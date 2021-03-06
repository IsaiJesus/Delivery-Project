import React from 'react';
import '../csscomponents/header.css';
import Bars from './bars';
import Home from './home';
import Nav from './nav';
import Main from './main';

function Header() {

    return(
      <header className="header">
        <div className="container-header">
          <Bars/>
          <Home/>
          <Nav/>
          <Main/>
        </div>
      </header>
    );
}

export default Header;