import React, { Fragment } from 'react'; 
import { Link } from 'react-router-dom';
import '../css/adshop';

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