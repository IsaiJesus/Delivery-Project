import React from 'react';
import { useParams } from 'react-router-dom';
import '../csscomponents/departamento.css';
import Section from '../global/section';
import Product from '../global/product';
import { products, titles } from '../../data/data';

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