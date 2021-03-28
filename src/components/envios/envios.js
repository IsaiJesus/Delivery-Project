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
    const places  = [
        {
            id: '1',
            lugar: 'Amayuca',
            precio: '$5 - $10'
        },
        {
            id: '2',
            lugar: 'Jantetelco',
            precio: '$5 - $10'
        },
        {
            id: '3',
            lugar: 'Amilcingo',
            precio: '$10 - $15'
        },
        {
            id: '4',
            lugar: 'Temoac',
            precio: '$20 - $25'
        },
        {
            id: '5',
            lugar: 'Zacualpan',
            precio: '$30'
        },
        {
            id: '6',
            lugar: 'Chalca',
            precio: '$15 - $20'
        },
        {
            id: '7',
            lugar: 'Jonacatepec',
            precio: '$20 - $25'
        }
    ];
    const information = [
        {
            id: '1',
            info: 'El precio del envío puede ser menor dependiendo de la cantidad de productos comprados.'
        },
        {
            id: '2',
            info: 'El precio del envío puede variar dependiendo de la dirección a la que se enviarán los productos.'
        }
    ];

    return(
      <div className="container-envios">
        <Section props={envios}/>
        {information.map(informacion => {
            return <Info key={informacion.id} props={informacion}/>
        })}
        <div className="division-envios">
            {places.map(lugar => {
                return <Shipment key={lugar.id} props={lugar}/>
            })}
        </div>
        <Gratis/>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Envios;