import React, { Fragment } from 'react';
import '../csscomponents/select.css';

const Select = ({props}) => {
    return ( 
        <Fragment>
            <div className="container-select" style={{alignSelf:props.align, margin:props.mar}}>
                <p>{props.text}</p>
                <select>
                    <option value="0">{props.option1}</option>
                    <option value="1">{props.option2}</option>
                    <option value="2">{props.option3}</option>
                    <option value="3">{props.option4}</option>
                    <option value="4">{props.option5}</option>
                    <option value="5">{props.option6}</option>
                    <option value="6">{props.option7}</option>
                </select>
            </div>
        </Fragment>
    )
}

export default Select;