import React, { Fragment } from 'react';
import '../csscomponents/shipment.css';

const Shipment = ({props}) => {
    return ( 
        <Fragment>
            <div className="box-shipment">
                <p>Envíos a</p>
                <p>{props.lugar}</p>
                <p>{props.precio}</p>
            </div>
        </Fragment>
    )
}

export default Shipment;