import React, { Fragment } from 'react';
import '../csscomponents/add.css';

const Add = ({props}) => {
    
    return ( 
        <Fragment>
            <button className="añadir" style={{padding:props.padd, margin:props.mar, width:props.ancho}}>Agregar al carrito</button>
        </Fragment>
    )
}

export default Add;