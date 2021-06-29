import React from 'react';
import '../styles/envios.css';
import TitleSection from '../components/titleSection';
import Alert from '../components/alert';
import Shipment from '../components/shipment';
import { titles, places, information } from '../data/data';
import useTitle from '../hooks/useTitle';

function Envios() {
  useTitle({ title: 'Envios' });

  return(
    <div className="container-envios d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Envíos').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      {information.filter(dataInformation => 
        dataInformation.id === 2).map(dataInformation => (
          <Alert key={dataInformation.id} text={dataInformation.text}/>
        ))}
      <div className="division-envios container-xl d-flex flex-column align-items-center justify-content-center p-0 mb-4">
        {places.map(dataPlaces => (
          <Shipment key={dataPlaces.id} 
          place={dataPlaces.place} 
          minPrice={dataPlaces.minPrice}/>
        ))}
      </div>
    </div>
  );
}

export default Envios;