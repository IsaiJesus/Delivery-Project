import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Inicio from './pages/inicio';
import Producto from './pages/producto';
import Departamentos from './pages/departamentos';
import Carnec from './pages/carniceriac';
import Tiendas from './pages/tiendas';
import Carniceriaeva from './pages/tiendaeva';
import Envios from './pages/envios';
import Carrito from './pages/carrito';
import { products, tiendas } from './data/data';
import Whatsapp from './components/whatsapp';
import Footer from './components/footer';
import NotFound from './pages/notFound';
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