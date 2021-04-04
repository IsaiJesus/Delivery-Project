import React, { Fragment } from 'react'; 
import { Link } from 'react-router-dom';
import '../css/tienda.css';

const Tienda = ({props}) => {
    return ( 
        <Fragment>
            <div className="box-tienda">
                <Link to={`/tiendas/${props.link}`} style={{background: props.color}} className="square-tienda">
                    <div className="text-square">
                        <p>{props.text}</p>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

export default Tienda;