import React, { Fragment } from 'react';
import '../styles/add.css';
import { useDispatchCart } from '../reducerAndContext/cartStates';

const Add = ({product}) => {
  const dispatch = useDispatchCart();

  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  }
  return ( 
    <Fragment>
      <button className="btn añadir w-100" 
      type="button" 
      data-toggle="modal" 
      data-target="#exampleModal" 
      onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
      <div className="modal fade p-0" 
      id="exampleModal" 
      tabIndex="-1" 
      aria-labelledby="exampleModalLabel" 
      aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="fas fa-times" aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <h4 className="text-center">Se ha agregado tu producto al carrito</h4>
            </div>
            <div className="modal-footer p-3 d-flex flex-column">
              <button type="button" className="btn carrito" data-dismiss="modal">Seguir comprando</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Add;