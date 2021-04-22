import React from 'react';
import '../styles/inicio.css';
import Section from './section';
import Store from './store';
import Todo from './todo';
import { titles, tiendas, links } from '../data/data';

function Stores() {

  return(
    <section className="container-section w-100">
      {titles.filter(data => data.title === 'Tiendas').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 division-section">
        {tiendas.slice(0, 10).map(data => (
          <Store key={data.id} props={data}/>
        ))}
      </div>
      {links.filter(data => data.link === '/tiendas').map(data => (
        <Todo key={data.id} props={data}/>
      ))}
    </section>
  );
}

export default Stores;