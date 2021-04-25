import React from 'react';
import '../styles/inicio.css';
import CardDep from './cardDep';
import TitleSection from './titleSection';
import ButtonLink from './buttonLink';
import departments, { titles, links } from '../data/data';

function SectionDepartments() {

  return(
    <section className="container-section w-100">
      {titles.filter(data => data.title === 'Departamentos').map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <div className="division-section container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0">
        {departments.map(data => (
          <CardDep key={data.id} link={data.link} img={data.img} department={data.department}/>
        )).slice(0, 10)}
      </div>
        {links.filter(data => data.link === '/departamentos').map(data => (
          <ButtonLink key={data.id} link={data.link} text={data.text}/>
        ))}
    </section>
  );
}

export default SectionDepartments;