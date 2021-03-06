import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/prodep.css';

const Prodep = ({props}) => {
    return ( 
        <Fragment>
            <div className="box-departament">
                <Link to={props.link} className="circle-departament">
                    <img src={props.img}/>
                    <div className="text-departament">
                        <p>{props.text}</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default Prodep;