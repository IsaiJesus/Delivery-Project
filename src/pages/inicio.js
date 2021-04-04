import React from 'react';
import '../css/inicio.css';
import Ad from '../components/ad';
import Departaments from '../components/departaments';
import Food from '../components/food';
import Stores from '../components/stores';

function Inicio() {

    return(
      <div className="container-inicio">
        <Ad/>  
        <Departaments/>
        <Food/>
        <Stores/>
      </div>
    );
}

export default Inicio;