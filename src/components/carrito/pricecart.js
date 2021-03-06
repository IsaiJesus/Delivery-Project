import React, { Fragment } from 'react';
import '../csscomponents/pricecart.css';
import Select from '../global/select';
import Info from '../global/info';

const Pricecart = () => {
    const options = {
        text: 'Enviar a:',
        option1: 'Amayuca',
        option2: 'Jantetelco',
        option3: 'Jonacatepec',
        option4: 'Chalca',
        option5: 'Temoac',
        option6: 'Zacualpan',
        option7: 'Huazulco',
        align: 'center',
        mar: '0'
    }
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
                <Select props={options}/>
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
                        <p>$0.00</p>
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