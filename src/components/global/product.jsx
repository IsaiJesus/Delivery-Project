import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/product.css';
import Add from './add';

const Product = ({props}) => {
    const espacio = {
        padd: '8px 0px',
        mar: '0',
        ancho: '90%'
    }
    
    return ( 
        <Fragment>
            <div className="container-product">
                <div className="box-product">
                    <Link to="/producto" className="btn-product">
                        <img src={props.img}/>
                        <div className="text-product">
                            <p id="pro-product">{props.product}</p>
                            <p id="price-product">{props.price}</p>
                            <p id="store-product">{props.store}</p>
                        </div>
                    </Link>
                    <Add props={espacio}/>
                </div>
            </div>
        </Fragment>
    )
}

export default Product;