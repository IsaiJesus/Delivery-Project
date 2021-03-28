import React, { Fragment } from 'react';
import '../csscomponents/select.css';

const Select = ({props, valor, handleChange}) => {

    return ( 
        <Fragment>
            <div className="container-select">
                <p>Filtrar por:</p>
                <select value={valor} onChange={handleChange}>
                    {props.map(filter => {
                        return <option key={filter.id} value={filter.category}>{filter.text}</option>
                    })}
                </select>
            </div>
        </Fragment>
    )
}

export default Select;