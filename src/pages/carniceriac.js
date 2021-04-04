import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/departamento.css';
import Section from '../components/section';
import Product from '../components/product';
import { products, titles } from '../data/data';

function Carnec({data}) {
    const { departamento } = useParams();

    return(
      <div className="container-departamento">
        {titles.filter(data => data.category === departamento).map(data => (
          <Section key={data.id} props={data}/>
        ))}
        <div className="division-departamento">
          {products.filter(data => data.category === departamento).map(data => (
            <Product key={data.id} props={data}/>
          ))}
        </div>
      </div>
    );
}

export default Carnec;