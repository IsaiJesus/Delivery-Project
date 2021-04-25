import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Inicio from './pages/inicio';
import Producto from './pages/producto';
import Departamentos from './pages/departamentos';
import Departamento from './pages/departamento';
import Tiendas from './pages/tiendas';
import Tienda from './pages/tienda';
import Envios from './pages/envios';
import Carrito from './pages/carrito';
import { products, stores } from './data/data';
import Whatsapp from './components/whatsapp';
import Footer from './components/footer';
import NotFound from './pages/notFound';
import ScrollToTop from './scrollToTop';
import Preguntas from './pages/preguntas';
import Nosotros from './pages/nosotros';
import Terminos from './pages/terminos';

function App() {

  return(
    <Router>
      <ScrollToTop/>
      <Header/>
      
      <Switch>
        <Route exact path="/terminos-y-condiciones" component={Terminos}/>
        <Route exact path="/preguntas-frecuentes" component={Preguntas}/>
        <Route exact path="/nosotros" component={Nosotros}/>
        <Route exact path="/departamentos" component={Departamentos}/>
        <Route exact path="/tiendas" component={Tiendas}/>
        <Route exact path="/carrito" component={Carrito}/>
        <Route exact path="/envios" component={Envios}/>
        <Route exact path="/" component={Inicio}/>
        <Route path="/departamentos/:departamento" data={products} component={Departamento}/>
        <Route path="/tiendas/:tienda" data={stores} component={Tienda}/>
        <Route path="/productos/:producto" data={products} component={Producto}/>
        <Route path="*" component={NotFound}/>
      </Switch>

      <Whatsapp/>
      <Footer/>
    </Router>
  );
}

export default App;