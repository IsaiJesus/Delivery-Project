import React from 'react';
import '../styles/inicio.css';
import CardDep from './cardDep';
import TitleSection from './titleSection';
import ButtonLink from './buttonLink';
import departments, { titles, links } from '../data/data';

function SectionDepartments() {

  return(
    <section className="container-section w-100">
      {titles.filter(dataTitles => dataTitles.title === 'Departamentos').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-section container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0">
        {departments.map(dataCardDep => (
          <CardDep key={dataCardDep.id} 
          link={dataCardDep.link} 
          img={dataCardDep.img} 
          department={dataCardDep.department}/>
        )).slice(0, 10)}
      </div>
        {links.filter(dataLinks => dataLinks.link === '/departamentos').map(dataLinks => (
          <ButtonLink key={dataLinks.id} link={dataLinks.link} text={dataLinks.text}/>
        ))}
    </section>
  );
}

export default SectionDepartments;