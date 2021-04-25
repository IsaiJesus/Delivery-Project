import React from 'react';
import '../styles/inicio.css';
import TitleSection from './titleSection';
import CardProduct from './cardProduct';
import ButtonLink from './buttonLink';
import { titles, products, links } from '../data/data';

function SectionFood() {

  return(
    <section className="container-section w-100">
      {titles.filter(data => data.title === 'Comida').map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <div className="container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 division-section">
        {products.filter(data => data.category === 'comida').slice(0, 10).map(data => (
          <CardProduct key={data.id} 
          productSelected={data} 
          link={data.link} 
          img={data.img} 
          nameProduct={data.nameProduct} 
          price={data.price} 
          store={data.store}/>
        ))}
      </div>
      {links.filter(data => data.link === '/departamentos/comida').map(data => (
        <ButtonLink key={data.id} link={data.link} text={data.text}/>
      ))}
    </section>
  );
}

export default SectionFood;