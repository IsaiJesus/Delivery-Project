import React from 'react';
import '../csscomponents/inicio.css';
import Ad from './ad';
import Departaments from './departaments';
import Food from './food';
import Free from './free';
import Whatsapp from '../global/whatsapp';
import Footer from '../global/footer';

function Inicio() {

    return(
      <div className="container-inicio">
        <Ad/>  
        <Departaments/>
        <Food/>
        <Free/>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Inicio;