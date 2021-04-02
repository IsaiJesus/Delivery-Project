import React, { Fragment } from 'react';
import '../csscomponents/notcart.css';
import Todo from '../global/todo';
import { links } from '../../data/data';

const Notcart = () => {

    return (
        <Fragment>
            <div className="box-not-cart">
                <i className="fas fa-shopping-cart"></i>
                <h1>No hay productos en tu carrito.</h1>
                <p>Puedes ver los productos y agregarlos al carrito para ver el total del precio.</p>
                {links.filter(data => data.link === '/').map(data => (
                    <Todo key={data.id} props={data}/>
                ))}
            </div>
        </Fragment>
    )
}

export default Notcart;