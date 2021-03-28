import React, { Fragment } from 'react';
import '../csscomponents/pricecart.css';
import Info from '../global/info';

const Pricecart = ({price}) => {
    const comprar1 = {
        info: 'Puedes hacer tu pedido llamando a 7351234578 o mándando un Whatsapp al mismo número.'
    }
    const comprar2 = {
        info: 'Puedes hacer tu pedido presionando el botón de Whatsapp que está en la parte inferior derecha.'
    }
    const comprar3 = {
        info: 'Si tienes alguna duda puedes preguntar al chatbot, mándando un mensaje directo a nuestras redes sociales, o bien, ver la sección de "Preguntas frecuentes" que se encuentra en el footer.'
    }

    return (
        <Fragment>
            <div className="box-price-cart">
                <div className="container-select-envio">
                    <p>Enviar a:</p>
                    <select>
                        <option value="0">Amayuca</option>
                        <option value="1">Jantetelco</option>
                        <option value="2">Jonacatepec</option>
                        <option value="3">Chalca</option>
                        <option value="4">Temoac</option>
                        <option value="5">Zacualpan</option>
                        <option value="6">Huazulco</option>
                    </select>
                </div>
                <h2>Resumen de tu pedido</h2>
                <div className="prices-cart">
                    <div className="price-list">
                        <p>Productos</p>
                        <p>0</p>
                    </div>
                    <div className="price-list">
                        <p>Subtotal</p>
                        <p>$0.00</p>
                    </div>
                    <div className="price-list">
                        <p>Envío</p>
                        <p>$0</p>
                    </div>
                    <div className="price-list">
                        <b>Total</b>
                        <p>{price.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
                    </div>
                </div>
                <div className="btn-cart">
                    <Info props={comprar1}/>
                    <Info props={comprar2}/>
                    <Info props={comprar3}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Pricecart;