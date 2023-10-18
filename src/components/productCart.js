import React from 'react';
import '../styles/carrito.css';

const ProductCart = ({img, nameProduct, price, store, quantity, unity, 
  index, handleIncrement, handleDecrement, handleRemove}) => {
    
  return (
    <div className="box-pro-cart d-flex flex-wrap p-2 mb-2">
      <div className="img-pro-cart col p-0">
        <img src={img} alt={nameProduct}/>
      </div>
      <div className="info-pro-cart col p-0 pl-2 d-flex flex-column justify-content-around">
        <p className="m-0">{nameProduct}</p>
        <p className="m-0">{price.toLocaleString("en", {style: "currency", currency: "USD"})}/{unity}</p>
        <p className="m-0">{store}</p>
      </div>
      <div className="cantidad-pro-cart text-center align-self-center col pt-3 p-0">
        <div className="d-flex justify-content-center">
          <button className="btn-quantity" onClick={() => handleDecrement(index)}>-</button>
          <input readOnly type="number" min="1" value={quantity}/>
          <button className="btn-quantity" onClick={() => handleIncrement(index)}>+</button>
        </div>
        <p className="m-0">{unity}/{(price).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
      </div>
      <div className="trash-pro-cart col p-0">
        <button className="fas fa-trash-alt pr-3" onClick={() => handleRemove(index)}></button>
      </div>
    </div>
  );
}

export default ProductCart;