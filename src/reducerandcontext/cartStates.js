import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {

      case "ADD": {
        const newProduct = action.item;
        const cartContainProduct = state.find(
          product => product.id === newProduct.id
        )
        return cartContainProduct 
        ? [...state,
          state.map(product => 
            product.id === newProduct.id
            ? {...product, quantity: product.quantity + 1}
            : product
            )
        ]
        : [
          ...state,
          {...action.item, quantity: 1}
        ]
      }

      case "REMOVE": 
        const newArr = [...state];
        newArr.splice(action.index, 1);
        return newArr;

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