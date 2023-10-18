import React from 'react';
import '../styles/inicio.css';
import Ad from '../components/ad';
import SectionDepartments from '../components/sectionDepartments';
import SectionFood from '../components/sectionFood';
import SectionStores from '../components/sectionStores';
import useTitle from '../hooks/useTitle';

function Inicio() {
  useTitle({ title: 'Inicio' });

  return(
    <div className="container-inicio">
      <Ad/>  
      <SectionDepartments/>
      <SectionFood/>
      <SectionStores/>
    </div>
  );
}

export default Inicio;