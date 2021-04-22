import React from 'react';
import '../styles/envios.css';

const Shipment = ({props}) => {
  return ( 
    <div className="box-shipment row w-100 text-center">
      <p className="col p-0 d-flex align-items-center justify-content-center">Envíos a</p>
      <p className="col p-0 d-flex align-items-center justify-content-center">{props.place}</p>
      <p className="col p-0 d-flex align-items-center justify-content-center">{props.minprice.toLocaleString("en", {style: "currency", currency: "USD"})} - {props.maxprice.toLocaleString("en", {style: "currency", currency: "USD"})}</p>
    </div>
  )
}

export default Shipment;