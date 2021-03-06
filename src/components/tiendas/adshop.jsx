import React, { Fragment } from 'react'; 
import { Link } from 'react-router-dom';
import '../csscomponents/adshop.css';

const Adshop = ({props}) => {
    return ( 
        <Fragment>
            <div className="container-ad-shop">
                <Link to={props.link} >
                    <img src={props.img}/>
                </Link>
            </div>
        </Fragment>
    )
}

export default Adshop;