import React from 'react';
import '../csscomponents/departamentos.css';
import Departamentsec from './departamentsec';
import Footer from '../global/footer';
import Whatsapp from '../global/whatsapp';

function Departamentos() {

    return(
      <div className="container-departamentos">
        <Departamentsec/>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Departamentos;