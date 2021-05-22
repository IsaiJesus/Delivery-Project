import React from 'react';
import '../styles/envios.css';

const Shipment = ({place, minPrice}) => {
  
  return ( 
    <div className="box-shipment row w-100 text-center">
      <p className="col p-0 d-flex align-items-center justify-content-center">Envíos a</p>
      <p className="col p-0 d-flex align-items-center justify-content-center">{place}</p>
      <p className="col p-0 d-flex align-items-center justify-content-center">
        {minPrice.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
    </div>
  )
}

export default Shipment;