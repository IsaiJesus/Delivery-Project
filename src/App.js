import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/global/header';
import Inicio from './components/inicio/inicio';
import Producto from './components/global/producto';
import Departamentos from './components/departamentos/departamentos';
import Carnec from './components/departamentos/carniceriac';
import Tiendas from './components/tiendas/tiendas';
import Carniceriaeva from './components/tiendas/tiendaeva';
import Envios from './components/envios/envios';
import Carrito from './components/carrito/carrito';
import { products, tiendas } from './data/data';
import Whatsapp from './components/global/whatsapp';
import Footer from './components/global/footer';
import NotFound from './components/global/notFound';
import ScrollToTop from './scrollToTop';

function App() {

  return(
    <Router>
      <ScrollToTop/>
      <Header/>
      
      <Switch>
        <Route exact path="/departamentos" component={Departamentos}/>
        <Route exact path="/tiendas" component={Tiendas}/>
        <Route exact path="/carrito" component={Carrito}/>
        <Route exact path="/envios" component={Envios}/>
        <Route exact path="/" component={Inicio}/>
        <Route path="/departamentos/:departamento" data={products} component={Carnec}/>
        <Route path="/tiendas/:tienda" data={tiendas} component={Carniceriaeva}/>
        <Route path="/productos/:producto" data={products} component={Producto}/>
        <Route path="*" component={NotFound}/>
      </Switch>

      <Whatsapp/>
      <Footer/>
    </Router>
  );
}

export default App;