import React, { Fragment } from 'react';
import '../css/shipment.css';

const Shipment = ({props}) => {
    return ( 
        <Fragment>
            <div className="box-shipment">
                <p>Envíos a</p>
                <p>{props.place}</p>
                <p>{props.minprice} - {props.maxprice}</p>
            </div>
        </Fragment>
    )
}

export default Shipment;