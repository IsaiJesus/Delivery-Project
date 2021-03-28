import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../reducerandcontext/cartStates';
import '../csscomponents/cart.css';

function Cart() {
    const items = useCart();

    return(
        <div className="container-cart">
            <NavLink to="/carrito" className="fas fa-shopping-cart" activeClassName="active-cart"></NavLink>
            <p id="cart-counter">{items.length}</p>
        </div> 
    );
}

export default Cart;