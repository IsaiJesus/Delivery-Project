import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/shop.css';
import Section from '../components/section';
import Product from '../components/product';
import { titles, products } from '../data/data';

function Carniceriaeva({data}) {
  const { tienda } = useParams();

    return(
      <div className="container-shop">
        {titles.filter(data => data.category === tienda).map(data => (
          <Section key={data.id} props={data}/>
        ))}
        <div className="division-shop">
          {products.filter(data => data.categoryStore === tienda).map(data => (
            <Product key={data.id} props={data}/>
          ))}
        </div>
      </div>
    );
}

export default Carniceriaeva;