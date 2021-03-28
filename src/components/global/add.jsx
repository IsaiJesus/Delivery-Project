import React, { Fragment } from 'react';
import { useDispatchCart } from '../../reducerandcontext/cartStates';
import '../csscomponents/add.css';

const Add = ({props, product}) => {
    const dispatch = useDispatchCart();

    const addToCart = (item) => {
        dispatch({ type: "ADD", item });
    }
    return ( 
        <Fragment>
            <button className="añadir" onClick={() => addToCart(product)}
            style={{padding:props.padd, margin:props.mar, width:props.ancho}}>
            Agregar al carrito
            </button>
        </Fragment>
    )
}

export default Add;