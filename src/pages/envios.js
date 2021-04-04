import React from 'react';
import '../css/envios.css';
import Section from '../components/section';
import Info from '../components/info';
import Shipment from '../components/shipment';
import { titles, places, information } from '../data/data';

function Envios() {

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