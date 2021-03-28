import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/global/header';
import Inicio from './components/inicio/inicio';
import Producto from './components/global/producto';
import Departamentos from './components/departamentos/departamentos';
import Carnec from './components/departamentos/carniceriac';
import Tiendas from './components/tiendas/tiendas';
import Carniceriaeva from './components/tiendas/tiendaeva';
import Envios from './components/envios/envios';
import Comida from './components/comida/comida';
import Carrito from './components/carrito/carrito';

function App() {

  return(
    <Router>
      <Header/>
  
      <Route exact path="/" component={Inicio}/>
      <Route exact path="/departamentos" component={Departamentos}/>
      <Route path="/departamentos/carne-de-cerdo" component={Carnec}/>
      <Route exact path="/tiendas" component={Tiendas}/>
      <Route path="/tiendas/carniceria-doña-eva" component={Carniceriaeva}/>
      <Route path="/envios" component={Envios}/>
      <Route path="/comida" component={Comida}/>
      <Route path="/carrito" component={Carrito}/>
      <Route path="/producto" component={Producto}/>
    </Router>
  );
}

export default App;