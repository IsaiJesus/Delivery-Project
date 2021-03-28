import React from 'react';
import { useCart, useDispatchCart } from '../../reducerandcontext/cartStates';
import '../csscomponents/carrito.css';
import Section from '../global/section';
import Notcart from './notcart';
import Procart from './procart';
import Pricecart from './pricecart';
import Footer from '../global/footer';
import Whatsapp from '../global/whatsapp';

function Carrito() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };
    const title = {
        title: 'Carrito'
    }
    const procart1 = {
        img: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/c/o/costilla-de-cerdo-para-parrilla-1-kg392386_x1.jpg',
        product: 'Costilla de cerdo',
        price: '100',
        unit: 'Kg',
        store: 'Carnicería Doña Eva'
    }

    return(
      <div className="container-carrito">
        <Section props={title}/>
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
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Carrito;