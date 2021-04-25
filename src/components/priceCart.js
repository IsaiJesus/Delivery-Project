import React, { useState } from 'react';
import '../styles/carrito.css';
import { places, information } from '../data/data';
import { useCart } from '../reducerAndContext/cartStates';
import Alert from './alert';

const PriceCart = ({totalPrice, resumen}) => {
  const items = useCart();
  const totalQuantity = items.reduce((total, b) => total + b.quantity, 0);
  const [checked, setChecked] = useState(5);

  return (
    <div className="box-price-cart p-4 text-center">
      <div className="container-select-envio p-2">
        <p className="m-0 pb-2">Enviar a:</p>
        <select onChange={e => setChecked(e.target.value)}>
          {places.map(data => (
            <option key={data.id} value={data.minPrice}>{data.place}</option>
          ))}
        </select>
      </div>
      <h2 className="m-0 mt-2 p-2">Resumen de tu pedido</h2>
      <div className="prices-cart">
        <div className="price-list">
          <p>Productos</p>
          <p>{totalQuantity}</p>
        </div>
        <div className="price-list">
          <p>Subtotal</p>
          <p>{totalPrice.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
        </div>
        <div className="price-list">
          <p>Envío</p>
          <p>{parseInt(checked).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
        </div>
        <div className="price-list">
          <b>Total</b>
          <p>{(totalPrice + parseInt(checked)).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
        </div>
      </div>
      <div className="btn-cart d-flex flex-column align-items-center justify-content-center">
        <button className="copy my-4" 
        type="button" 
        data-toggle="modal" 
        data-target="#exampleModal"
        onClick={() =>  navigator.clipboard.writeText(resumen + " Total: $" + (totalPrice + parseInt(checked)))}>
          Copiar contenido del carrito
        </button>
        <div className="modal fade p-0" 
        id="exampleModal" 
        tabIndex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span className="fas fa-times" aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                <h4 className="text-center">Se ha copiado el contenido del carrito al portapapeles</h4>
              </div>
              <div className="modal-footer p-3 d-flex flex-column">
                <button type="button" className="btn btn-green" data-dismiss="modal">Aceptar</button>
              </div>
            </div>
          </div>
        </div>
        {information.filter(data => data.id === 10).map(data => (
          <Alert key={data.id} text={data.text}/>
        ))}
        {information.slice(4, 9).map(data => (
          <Alert key={data.id} text={data.text}/>
        ))}
      </div>
    </div>
  );
}

export default PriceCart;