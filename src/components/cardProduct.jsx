import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cardProduct.css';
import Add from './add';

const CardProduct = ({props}) => {
    
  return ( 
    <div className="card card-product my-1">
      <div className="box-product text-center">
          <Link to={`/productos/${props.link}`} className="text-decoration-none">
            <img src={props.img} className="card-img-top" alt={props.product}/>
            <div className="card-body p-2">
              <p className="card-title text-truncate">{props.product}</p>
              <p className="card-subtitle text-muted">{props.price.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
              <p className="card-text text-truncate">{props.store}</p>
            </div>
          </Link>
          <Add product={props}/>
        </div>
    </div>
  );
}

export default CardProduct;