import React from 'react';
import '../csscomponents/envios.css';
import Section from '../global/section';
import Info from '../global/info';
import Shipment from './shipment';
import { titles, places, information } from '../../data/data';

function Envios() {
    const envios = {
        title: 'Costo de envíos'
    }

    return(
      <div className="container-envios">
        {titles.filter(data => data.title === 'Costo de envíos').map(data => (
            <Section key={data.id} props={data}/>
        ))}
        {information.slice(0, 2).map(information => {
            return <Info key={information.id} props={information}/>
        })}
        <div className="division-envios">
            {places.map(place => (
                <Shipment key={place.id} props={place}/>
            ))}
        </div>
      </div>
    );
}

export default Envios;