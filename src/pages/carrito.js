import React from 'react';
import { useCart, useDispatchCart } from '../reducerAndContext/cartStates';
import '../styles/carrito.css';
import Section from '../components/section';
import NotCart from '../components/notCart';
import ProductCart from '../components/productCart';
import PriceCart from '../components/priceCart';
import { titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Carrito() {
  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + b.price, 0);
  const resumen = items.map(data => data.product +" $" + data.price +" "+ data.store);

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  }
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  return(
    <div className="container-carrito d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Carrito | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Carrito').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="division-carrito container-xl row row-cols-1 row-cols-md-2 p-0 mb-4">
        <div className="col col-md-8 p-3">
          {items.length === 0 ? <NotCart/> : items.map((item, index) => (
            <ProductCart key={index} 
            product={item} 
            index={index} 
            addToCart={addToCart}
            handleRemove={handleRemove}/>
          ))}
        </div>
        <div className="col col-md-4 p-3">
          <PriceCart price={totalPrice} resumen={resumen}/>
        </div>
      </div>
    </div>
  );
}

export default Carrito;