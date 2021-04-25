import React from 'react';
import '../styles/envios.css';
import TitleSection from '../components/titleSection';
import Alert from '../components/alert';
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
        <TitleSection key={data.id} title={data.title}/>
      ))}
      {information.slice(0, 2).map(data => {
        return <Alert key={data.id} text={data.text}/>
      })}
      <div className="division-envios container-xl d-flex flex-column align-items-center justify-content-center p-0 mb-4">
        {places.map(data => (
          <Shipment key={data.id} place={data.place} minPrice={data.minPrice} maxPrice={data.maxPrice}/>
        ))}
      </div>
    </div>
  );
}

export default Envios;