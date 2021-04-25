import React from 'react';
import '../styles/inicio.css';
import TitleSection from './titleSection';
import CardStore from './cardStore';
import ButtonLink from './buttonLink';
import { titles, stores, links } from '../data/data';

function SectionStores() {

  return(
    <section className="container-section w-100">
      {titles.filter(data => data.title === 'Tiendas').map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <div className="container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 division-section">
        {stores.slice(0, 10).map(data => (
          <CardStore key={data.id} link={data.link} img={data.img} store={data.store}/>
        ))}
      </div>
      {links.filter(data => data.link === '/tiendas').map(data => (
        <ButtonLink key={data.id} link={data.link} text={data.text}/>
      ))}
    </section>
  );
}

export default SectionStores;