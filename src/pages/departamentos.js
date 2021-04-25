import React from 'react';
import '../styles/containerPages.css';
import TitleSection from '../components/titleSection';
import CardDep from '../components/cardDep';
import departments, { titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Departamentos() {

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Departamentos | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Departamentos').map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {departments.map(data => (
          <CardDep key={data.id} link={data.link} img={data.img} department={data.department}/>
        ))}
      </div>
    </div>
  );
}

export default Departamentos;