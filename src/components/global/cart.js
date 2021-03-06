import React from 'react';
import { NavLink } from 'react-router-dom';
import '../csscomponents/cart.css';

function Cart() {

    return(
        <div className="container-cart">
            <NavLink to="/carrito" className="fas fa-shopping-cart" activeClassName="active-cart"></NavLink>
            <p id="cart-counter">0</p>
        </div>
    );
}

export default Cart;