import React from 'react';
import '../csscomponents/header.css';
import Bars from './bars';
import Home from './home';
import Nav from './nav';
import Main from './main';
import { useCart } from '../../reducerandcontext/cartStates';

function Header() {
    const items = useCart();
    const props1 = {
      link: "/carrito",
      text: "Ir al carrito"
    }
    const props2 = {
      link: "/",
      text: "Seguir comprando"
    }
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