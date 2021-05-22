import React from 'react';
import '../styles/containerPages.css';
import TitleSection from '../components/titleSection';
import CardDep from '../components/cardDep';
import departments, { titles } from '../data/data';
import useTitle from '../hooks/useTitle';

function Departamentos() {
  useTitle({ title: 'Departamentos' });

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Departamentos').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {departments.map(dataDepartments => (
          <CardDep key={dataDepartments.id} 
          link={dataDepartments.link} 
          img={dataDepartments.img} 
          department={dataDepartments.department}/>
        ))}
      </div>
    </div>
  );
}

export default Departamentos;