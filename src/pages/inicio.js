import React from 'react';
import '../styles/inicio.css';
import Ad from '../components/ad';
import SectionDepartments from '../components/sectionDepartments';
import SectionFood from '../components/sectionFood';
import SectionStores from '../components/sectionStores';
import { Helmet } from 'react-helmet';

function Inicio() {

  return(
    <div className="container-inicio">
      <Helmet>
        <title>ORDEEM</title>
      </Helmet>
      <Ad/>  
      <SectionDepartments/>
      <SectionFood/>
      <SectionStores/>
    </div>
  );
}

export default Inicio;