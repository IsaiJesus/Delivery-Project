import React from 'react';
import '../styles/carrito.css';

const ProductCart = ({product, index, addToCart, handleRemove}) => {
    
  return (
    <div className="box-pro-cart d-flex flex-wrap p-2 mb-2">
      <div className="img-pro-cart col p-0">
        <img src={product.img} alt={product.product}/>
      </div>
      <div className="info-pro-cart col p-0 pl-2 d-flex flex-column justify-content-around">
        <p className="m-0">{product.product}</p>
        <p className="m-0">{product.price.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
        <p className="m-0">{product.store}</p>
      </div>
      <div className="cantidad-pro-cart text-center align-self-center col pt-3 p-0">
        <div className="d-flex justify-content-center">
          <button className="btn-quantity" onClick={() => handleRemove(index)}>-</button>
          <input readOnly type="number" min="1" value={product.quantity}/>
          <button className="btn-quantity" onClick={() => addToCart(product)}>+</button>
        </div>
        <p className="m-0">{product.unity}/{(product.price).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
      </div>
      <div className="trash-pro-cart col p-0">
        <button className="fas fa-trash-alt pr-3" onClick={() => handleRemove(index)}></button>
      </div>
    </div>
  );
}

export default ProductCart;