import React, { Fragment } from 'react';
import '../css/section.css';

const Section = ({props}) => {
    return ( 
        <Fragment>
            <div className="title-departament">
                <h1>{props.title}</h1>
            </div>
        </Fragment>
    )
}

export default Section;