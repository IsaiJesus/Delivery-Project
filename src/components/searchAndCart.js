import React from 'react';
import '../styles/navbar.css';
import Search from './search';
import Cart from './cart';

function SearchCart() {

  return(
    <div className="d-flex">
        <Search/>
        <Cart/>
    </div>
  );
}

export default SearchCart;