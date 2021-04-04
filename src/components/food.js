import React from 'react';
import '../css/food.css';
import Section from '../components/section';
import Product from '../components/product';
import Todo from '../components/todo';
import { titles, products, links } from '../data/data';

function Food() {

  return(
    <section className="container-food">
        {titles.filter(data => data.title === 'Comida').map(data => (
                <Section key={data.id} props={data}/>
        ))}
        <div className="division-food">
            {products.filter(data => data.category === 'comida').slice(0, 8).map(product => (
                <Product key={product.id} props={product}/>
            ))}
        </div>
        {links.filter(link => link.id === 3).map(link => (
            <Todo key={link.id} props={link}/>
        ))}
    </section>
  );
}

export default Food;