import React, { Fragment } from 'react';
import '../csscomponents/info.css';

const Info = ({props}) => {
    return ( 
        <Fragment>
            <div className="box-info">
                <i className="fas fa-info-circle"></i>
                <p>{props.text}</p>
            </div>
        </Fragment>
    )
}

export default Info;