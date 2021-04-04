import React, { Fragment, useState } from 'react';
import { places, information } from '../data/data';
import { useCart } from '../reducerAndContext/cartStates';
import '../css/pricecart.css';
import Info from './info';

const Pricecart = ({price}) => {
    const items = useCart();
    const [checked, setChecked] = useState(5);

    return (
        <Fragment>
            <div className="box-price-cart">
                <div className="container-select-envio">
                    <p>Enviar a:</p>
                    <select onChange={e => setChecked(e.target.value)}>
                        {places.map(data => (
                            <option key={data.id} value={data.minprice}>{data.place}</option>
                        ))}
                    </select>
                </div>
                <h2>Resumen de tu pedido</h2>
                <div className="prices-cart">
                    <div className="price-list">
                        <p>Productos</p>
                        <p>{items.length}</p>
                    </div>
                    <div className="price-list">
                        <p>Subtotal</p>
                        <p>{price.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
                    </div>
                    <div className="price-list">
                        <p>Envío</p>
                        <p>{parseInt(checked).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
                    </div>
                    <div className="price-list">
                        <b>Total</b>
                        <p>{(price + parseInt(checked)).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
                    </div>
                </div>
                <div className="btn-cart">
                    {information.slice(4, 8).map(data => (
                        <Info key={data.id} props={data}/>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Pricecart;