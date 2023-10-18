import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cards.css';
import ButtonAdd from './buttonAdd';

const CardProduct = ({productSelected, link, img, nameProduct, price, unity, store}) => {
    
  return ( 
    <div className="card card-product my-1">
      <div className="box-product text-center">
          <Link to={`/productos/${link}`} className="text-decoration-none">
            <img src={img} className="card-img-top" alt={nameProduct}/>
            <div className="card-body p-2">
              <p className="card-title text-truncate">{nameProduct}</p>
              <p className="card-subtitle text-truncate text-muted">{price.toLocaleString("en", {style: "currency", currency: "USD"})}/
              {unity}</p>
              <p className="card-text text-truncate">{store}</p>
            </div>
          </Link>
          <ButtonAdd productSelected={productSelected}/>
        </div>
    </div>
  );
}

export default CardProduct;