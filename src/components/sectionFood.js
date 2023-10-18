import React from 'react';
import '../styles/inicio.css';
import TitleSection from './titleSection';
import CardProduct from './cardProduct';
import ButtonLink from './buttonLink';
import { titles, products, links } from '../data/data';

function SectionFood() {

  return(
    <section className="container-section w-100">
      {titles.filter(dataTitles => dataTitles.title === 'Comida').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 division-section">
        {products.filter(dataProducts => dataProducts.category === 'comida').slice(0, 10).map(dataProducts => (
          <CardProduct key={dataProducts.id} 
          productSelected={dataProducts} 
          link={dataProducts.link} 
          img={dataProducts.img} 
          nameProduct={dataProducts.nameProduct} 
          price={dataProducts.price} 
          unity={dataProducts.unity}
          store={dataProducts.store}/>
        ))}
      </div>
      {links.filter(dataLinks => dataLinks.link === '/departamentos/comida').map(dataLinks => (
        <ButtonLink key={dataLinks.id} link={dataLinks.link} text={dataLinks.text}/>
      ))}
    </section>
  );
}

export default SectionFood;