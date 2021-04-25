import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {

    case "ADD": {
      const newProduct = action.productInCart;
      const cartContainProduct = state.find(
        product => product.id === newProduct.id
      )
      if(cartContainProduct){
        cartContainProduct.quantity ++;
        return [...state];
      }else{
        return[...state,
          {...action.productInCart}
        ];
      }
    } 

    case "INCREMENT": {
      const newProduct = action.productInCart;
      const cartContainProduct = state.find(
        product => product.id === newProduct.id
      )
      if(cartContainProduct){
        cartContainProduct.quantity ++;
        return [...state];
      }else{
        return[...state];
      }
    } 

    case "DECREMENT": {
      const newProduct = action.productInCart;
      const quitArr = [...state];
      const cartContainProduct = state.find(
        product => product.id === newProduct.id
      )
      if(cartContainProduct && cartContainProduct.quantity > 1){
        cartContainProduct.quantity --;
        return [...state];
      }else{
        return[...state];
      }
    } 

    case "REMOVE": 
      const quitArr = [...state];
      quitArr.splice(action.index, 1);
      return quitArr;

    default:
      return state;
    }
  };

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
  
    return (
      <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
          {children}
        </CartStateContext.Provider>
      </CartDispatchContext.Provider>
    );
  };

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);