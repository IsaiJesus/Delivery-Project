import React from 'react';
import { useCart, useDispatchCart } from '../../reducerandcontext/cartStates';
import '../csscomponents/carrito.css';
import Section from '../global/section';
import Notcart from './notcart';
import Procart from './procart';
import Pricecart from './pricecart';
import { titles } from '../../data/data';

function Carrito() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };

    return(
      <div className="container-carrito">
        {titles.filter(data => data.title === 'Carrito').map(data => (
            <Section key={data.id} props={data}/>
        ))}
        <div className="division-carrito">
            <div className="container-products-cart">
                {items.length === 0 ? <Notcart/> : items.map((item, index) => (
                    <Procart key={index} product={item} index={index} handleRemove={handleRemove}/>
                ))}
            </div>
            <div className="container-price-cart">
                <Pricecart price={totalPrice}/>
            </div>
        </div>
      </div>
    );
}

export default Carrito;