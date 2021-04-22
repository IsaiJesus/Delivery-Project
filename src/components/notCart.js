import React from 'react';
import '../styles/carrito.css';
import Todo from './todo';
import { links } from '../data/data';

const NotCart = () => {

  return (
    <div className="box-not-cart d-flex flex-column align-items-center justify-content-center">
      <i className="fas fa-shopping-cart"></i>
      <h1 className="m-0 p-2">No hay productos en tu carrito.</h1>
      <p className="p-3 m-0">Puedes ver los productos y agregarlos al carrito para ver el total del precio.</p>
      {links.filter(data => data.link === '/').map(data => (
        <Todo key={data.id} props={data}/>
      ))}
    </div>
  );
}

export default NotCart;