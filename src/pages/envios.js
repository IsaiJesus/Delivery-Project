import React from 'react';
import '../styles/envios.css';
import Section from '../components/section';
import Info from '../components/info';
import Shipment from '../components/shipment';
import { titles, places, information } from '../data/data';
import { Helmet } from 'react-helmet';

function Envios() {

  return(
    <div className="container-envios d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Envios | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Costo de envíos').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      {information.slice(0, 2).map(information => {
        return <Info key={information.id} props={information}/>
      })}
      <div className="division-envios container-xl d-flex flex-column align-items-center justify-content-center p-0 mb-4">
        {places.map(place => (
          <Shipment key={place.id} props={place}/>
        ))}
      </div>
    </div>
  );
}

export default Envios;