import React, { Fragment } from 'react';
import '../csscomponents/select.css';

const Select = ({props, initialId, finalId, valor, handleChange}) => {

    return ( 
        <Fragment>
            <div className="container-select">
                <p>Filtrar por:</p>
                <select value={valor} onChange={handleChange}>
                    {props.slice(initialId, finalId).map(filter => (
                        <option key={filter.id} value={filter.category}>{filter.text}</option>
                    ))}
                </select>
            </div>
        </Fragment>
    )
}

export default Select;