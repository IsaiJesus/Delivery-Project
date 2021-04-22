import React from 'react';
import '../styles/inicio.css';
import Section from '../components/section';
import CardProduct from './cardProduct';
import Todo from '../components/todo';
import { titles, products, links } from '../data/data';

function Food() {

  return(
    <section className="container-section w-100">
      {titles.filter(data => data.title === 'Comida').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 division-section">
        {products.filter(data => data.category === 'comida').slice(0, 10).map(product => (
          <CardProduct key={product.id} props={product}/>
        ))}
      </div>
      {links.filter(link => link.link === '/departamentos/comida').map(link => (
        <Todo key={link.id} props={link}/>
      ))}
    </section>
  );
}

export default Food;