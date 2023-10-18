import React from 'react';
import '../styles/inicio.css';
import TitleSection from './titleSection';
import CardStore from './cardStore';
import ButtonLink from './buttonLink';
import { titles, stores, links } from '../data/data';

function SectionStores() {

  return(
    <section className="container-section w-100">
      {titles.filter(dataTitles => dataTitles.title === 'Tiendas').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 division-section">
        {stores.slice(0, 10).map(dataStores => (
          <CardStore key={dataStores.id} 
          link={dataStores.link} 
          img={dataStores.img} 
          store={dataStores.store}/>
        ))}
      </div>
      {links.filter(dataLinks => dataLinks.link === '/tiendas').map(dataLinks => (
        <ButtonLink key={dataLinks.id} link={dataLinks.link} text={dataLinks.text}/>
      ))}
    </section>
  );
}

export default SectionStores;