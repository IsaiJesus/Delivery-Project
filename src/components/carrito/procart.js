import React, { Fragment } from 'react';
import '../csscomponents/procart.css';

const Procart = ({product, index, handleRemove}) => {
    return (
        <Fragment>
            <div className="box-pro-cart">
                <div className="division-pro-cart">
                    <div className="img-pro-cart">
                        <img src={product.img}/>
                    </div>
                    <div className="info-pro-cart">
                        <p id="pro-cart">{product.product}</p>
                        <p id="price-cart">${product.price}/kg</p>
                        <p id="store-cart">{product.store}</p>
                    </div>
                </div>
                <div className="cantidad-pro-cart">
                    <input type="number"/>
                    <p>${product.price.toLocaleString("en", {style: "currency", currency: "USD"})}/kg</p>
                </div>
                <div className="trash-pro-cart">
                    <button className="fas fa-trash-alt" onClick={() => handleRemove(index)}></button>
                </div>
            </div>
        </Fragment>
    )
}

export default Procart;