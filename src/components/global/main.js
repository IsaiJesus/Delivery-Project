import React from 'react';
import '../csscomponents/main.css';
import Search from '../busqueda/search';
import Cart from './cart';

function Main() {

    return(
      <div className="container-main">
          <Search/>
          <Cart/>
      </div>
    );
}

export default Main;