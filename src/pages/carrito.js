import React from 'react';
import { useCart, useDispatchCart } from '../hooks/cartStates';
import '../styles/carrito.css';
import TitleSection from '../components/titleSection';
import NotCart from '../components/notCart';
import ProductCart from '../components/productCart';
import PriceCart from '../components/priceCart';
import { titles } from '../data/data';
import useTitle from '../hooks/useTitle';

function Carrito() {
  useTitle({ title: 'Carrito' });

  const items = useCart();
  const dispatch = useDispatchCart();
  const totalPrice = items.reduce((total, b) => total + (b.price*b.quantity), 0);
  const resumen = items.map(dataItems => 
    " " + dataItems.quantity + " " + dataItems.unity + " " + dataItems.nameProduct + " $" + dataItems.price +" "+ dataItems.store);

  const handleIncrement = (index) => {
    dispatch({ type: "INCREMENT", index });
  }
  const handleDecrement = (index) => {
    dispatch({ type: "DECREMENT", index });
  }
  const handleRemove = (index) => {
    dispatch({ type: "REMOVE", index });
  };

  return(
    <div className="container-carrito d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Carrito').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-carrito container-xl row row-cols-1 row-cols-md-2 p-0 mb-4">
        <div className="col col-md-8 p-3">
          {items.length === 0 ? <NotCart/> : items.map((productSelected, index) => (
            <ProductCart key={index} 
            img={productSelected.img}
            nameProduct={productSelected.nameProduct}
            price={productSelected.price}
            store={productSelected.store}
            quantity={productSelected.quantity}
            unity={productSelected.unity}
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