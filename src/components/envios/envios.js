import React from 'react';
import '../csscomponents/envios.css';
import Section from '../global/section';
import Info from '../global/info';
import Shipment from './shipment';
import Gratis from './gratis';
import Footer from '../global/footer';
import Whatsapp from '../global/whatsapp';

function Envios() {
    const envios = {
        title: 'Costo de envíos'
    }
    const info1 = {
        info: 'El precio del envío puede ser menor dependiendo de la cantidad de productos comprados.'
    }
    const info2 = {
        info: 'El precio del envío puede variar dependiendo de la dirección a la que se enviarán los productos.'
    }
    const amayuca = {
        lugar: 'Amayuca',
        precio: '$0 - $5'
    }
    const jantetelco = {
        lugar: 'Jantetelco',
        precio: '$5 - $10'
    }
    const amilcingo = {
        lugar: 'Amilcingo',
        precio: '$10'
    }
    const temoac = {
        lugar: 'Temoac',
        precio: '$10 - $15'
    }
        const zacualpan = {
        lugar: 'Zacualpan',
        precio: '$15'
    }
    const chalca = {
        lugar: 'Chalca',
        precio: '$10 - $15'
    }
    const jonacatepec = {
        lugar: 'Jonacatepec',
        precio: '$10 - $15 - $20'
    }

    return(
      <div className="container-envios">
        <Section props={envios}/>
        <Info props={info1}/>
        <Info props={info2}/>
        <div className="division-envios">
          <Shipment props={amayuca}/>
          <Shipment props={jantetelco}/>
          <Shipment props={amilcingo}/>
          <Shipment props={temoac}/>
          <Shipment props={zacualpan}/>
          <Shipment props={chalca}/>
          <Shipment props={jonacatepec}/>
        </div>
        <Gratis/>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Envios;