import React, { useState } from 'react';
import '../styles/carrito.css';
import { places, information } from '../data/data';
import { useCart } from '../hooks/cartStates';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Alert from './alert';

const PriceCart = ({totalPrice, resumen}) => {
  const items = useCart();
  const totalQuantity = items.reduce((total, b) => total + b.quantity, 0);
  const [checked, setChecked] = useState('Amayuca');
  const [especific, setEspecific] = useState('');

  return (
    <div className="box-price-cart p-4 text-center">
      <div className="container-select-envio p-2">
        <p className="m-0 pb-2">Enviar a:</p>
        <select onChange={e => setChecked(e.target.value)}>
          {places.map(dataPlaces => (
            <option key={dataPlaces.id} value={dataPlaces.place}>{dataPlaces.place}</option>
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
          <p>{checked}</p>
        </div>
        <div className="price-list">
          <b>Total</b>
          <p>{totalPrice.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
        </div>
        <div className="especific my-3">
          <p className="mb-1">Especificaciones:</p>
          <textarea onChange={e => setEspecific(e.target.value)} className="w-100" rows="100"></textarea>
        </div>
      </div>
      <div className="btn-cart d-flex flex-column align-items-center justify-content-center">
        <CopyToClipboard text={resumen + " Total: $" + totalPrice + ". " + "Enviar a: " + checked + ". " + especific}>
          <button className="copy my-4" 
          type="button" 
          data-toggle="modal" 
          data-target="#exampleModal">
            Copiar contenido del carrito
          </button>
        </CopyToClipboard>
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
        {information.filter(dataInformation =>
        dataInformation.id === 1 || 
        dataInformation.id === 2 ||
        dataInformation.id === 5).map(dataInformation => (
          <Alert key={dataInformation.id} text={dataInformation.text}/>
        ))}
      </div>
    </div>
  );
}

export default PriceCart;