import React from 'react';
import '../styles/inicio.css';
import Ad from '../components/ad';
import Departments from '../components/departments';
import Food from '../components/food';
import Stores from '../components/stores';
import { Helmet } from 'react-helmet';

function Inicio() {

  return(
    <div className="container-inicio">
      <Helmet>
        <title>ORDEEM</title>
      </Helmet>
      <Ad/>  
      <Departments/>
      <Food/>
      <Stores/>
    </div>
  );
}

export default Inicio;