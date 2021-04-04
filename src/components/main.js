import React from 'react';
import '../css/main.css';
import Search from './search';
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