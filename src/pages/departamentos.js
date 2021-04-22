import React from 'react';
import '../styles/departamentos.css';
import Section from '../components/section';
import CardDep from '../components/cardDep';
import departments, { titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Departamentos() {

  return(
    <div className="container-departamentos d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Departamentos | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Departamentos').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="division-departamentos container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {departments.map(data => (
          <CardDep key={data.id} props={data}/>
        ))}
      </div>
    </div>
  );
}

export default Departamentos;