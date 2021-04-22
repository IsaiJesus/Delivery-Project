import React from 'react';
import '../styles/inicio.css';
import CardDep from './cardDep';
import Section from './section';
import Todo from './todo';
import departments, { titles, links } from '../data/data';

function Departments() {

  return(
    <section className="container-section w-100">
      {titles.filter(data => data.title === 'Departamentos').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="division-section container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0">
        {departments.map(data => (
          <CardDep key={data.id} props={data}/>
        )).slice(0, 10)}
      </div>
        {links.filter(link => link.link === '/departamentos').map(link => (
          <Todo key={link.id} props={link}/>
        ))}
    </section>
  );
}

export default Departments;