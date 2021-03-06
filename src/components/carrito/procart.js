import React, { Fragment } from 'react';
import '../csscomponents/procart.css';

const Procart = ({props}) => {
    return (
        <Fragment>
            <div className="box-pro-cart">
                <div className="division-pro-cart">
                    <div className="img-pro-cart">
                        <img src={props.img}/>
                    </div>
                    <div className="info-pro-cart">
                        <p id="pro-cart">{props.product}</p>
                        <p id="price-cart">{props.price}</p>
                        <p id="store-cart">{props.tienda}</p>
                    </div>
                </div>
                <div className="cantidad-pro-cart">
                    <input type="number"/>
                    <p>{props.price}</p>
                </div>
                <div className="trash-pro-cart">
                    <button className="fas fa-trash-alt"></button>
                </div>
            </div>
        </Fragment>
    )
}

export default Procart;