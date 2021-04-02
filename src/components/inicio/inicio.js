import React from 'react';
import '../csscomponents/inicio.css';
import Ad from './ad';
import Departaments from './departaments';
import Food from './food';
import Stores from './stores';

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