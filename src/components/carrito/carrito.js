import React from 'react';
import '../csscomponents/carrito.css';
import Section from '../global/section';
import Notcart from './notcart';
/*import Procart from './procart';*/
import Pricecart from './pricecart';
import Footer from '../global/footer';
import Whatsapp from '../global/whatsapp';

function Carrito() {
    const title = {
        title: 'Carrito'
    }
    const procart1 = {
        img: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/c/o/costilla-de-cerdo-para-parrilla-1-kg392386_x1.jpg',
        product: 'Costilla de cerdo',
        price: '$100/kg',
        tienda: 'Carnicería Doña Eva'
    }

    return(
      <div className="container-carrito">
        <Section props={title}/>
        <div className="division-carrito">
            <div className="container-products-cart">
                <Notcart/>
            </div>
            <div className="container-price-cart">
                <Pricecart/>
            </div>
        </div>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Carrito;