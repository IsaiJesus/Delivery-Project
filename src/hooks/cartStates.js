import React, { useReducer, useContext, createContext } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {

    case "ADD": {
      const newProduct = action.productSelected;
      const cartContainProduct = state.find(
        product => product.id === newProduct.id
      )
      if(cartContainProduct){
        /*const position = state.length - 1;
        state[position].quantity ++;
        return [...state];
        return [...state,
          {...state[position], quantity: state[position].quantity + 1}
        ];*/
        cartContainProduct.quantity ++;
        return [...state];
      }else{
        return[...state,
          {...action.productSelected, quantity: 1}
        ];
      }
    } 

    case "INCREMENT": {
      const position = action.index;
      state[position].quantity ++;
      return [...state];
      /*const position = action.index;
      return [...state,
        {...state[position], quantity: state[position].quantity + 1}
      ];*/
    }

    case "DECREMENT": {
      const position = action.index;
      if(state[position].quantity > 1){
        state[position].quantity --;
      }
      return [...state];
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