import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../hooks/cartStates';
import '../styles/navbar.css';

function Cart() {
    const items = useCart();
    const totalQuantity = items.reduce((total, b) => total + b.quantity, 0);

    return(
        <div className="container-cart">
            <NavLink to="/carrito" className="fas fa-shopping-cart" activeClassName="active-cart"></NavLink>
            <p id="cart-counter">{totalQuantity}</p>
        </div> 
    );
}

export default Cart;
