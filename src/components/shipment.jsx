import React from 'react';
import '../styles/envios.css';

const Shipment = ({place}) => {
  
  return ( 
    <div className="box-shipment row w-100 text-center">
      <p className="col pl-2 pl-md-5 p-0 d-flex align-items-center justify-content-start">Envíos a</p>
      <p className="col pr-2 pr-md-5 p-0 d-flex align-items-center justify-content-end">{place}</p>
    </div>
  )
}

export default Shipment;