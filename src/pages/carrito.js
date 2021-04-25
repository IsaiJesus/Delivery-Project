import React from 'react';
import { useCart, useDispatchCart } from '../reducerAndContext/cartStates';
import '../styles/carrito.css';
import TitleSection from '../components/titleSection';
import NotCart from '../components/notCart';
import ProductCart from '../components/productCart';
import PriceCart from '../components/priceCart';
import { titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Carrito() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + (b.price*b.quantity), 0);
  const resumen = items.map(data => data.quantity + " " + data.nameProduct + " $" + data.price +" "+ data.store);

  const handleIncrement = (productInCart) => {
    dispatch({ type: "INCREMENT", productInCart });
  }
  const handleDecrement = (productInCart) => {
    dispatch({ type: "DECREMENT", productInCart });
  }
  const handleRemove = (productInCart) => {
    dispatch({ type: "REMOVE", productInCart });
  };

  return(
    <div className="container-carrito d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Carrito | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Carrito').map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <div className="division-carrito container-xl row row-cols-1 row-cols-md-2 p-0 mb-4">
        <div className="col col-md-8 p-3">
          {items.length === 0 ? <NotCart/> : items.map((productInCart, index) => (
            <ProductCart key={index} 
            productInCart={productInCart} 
            img={productInCart.img}
            nameProduct={productInCart.nameProduct}
            price={productInCart.price}
            store={productInCart.store}
            quantity={productInCart.quantity}
            unity={productInCart.unity}
            index={index} 
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleRemove={handleRemove}/>
          ))}
        </div>
        <div className="col col-md-4 p-3">
          <PriceCart totalPrice={totalPrice} resumen={resumen}/>
        </div>
      </div>
    </div>
  );
}

export default Carrito;