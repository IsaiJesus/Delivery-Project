import React from 'react';
import ReactDOM from 'react-dom';
import "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { CartProvider } from './reducerAndContext/cartStates';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App/>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('index')
);