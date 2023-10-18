import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Preguntas from './pages/preguntas';
import Nosotros from './pages/nosotros';
import Terminos from './pages/terminos';
import ScrollToTop from './scrollToTop';

function App() {

  return(
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      
      <Routes>
        <Route exact path="/terminos-y-condiciones" element={<Terminos/>}/>
        <Route exact path="/preguntas-frecuentes" element={<Preguntas/>}/>
        <Route exact path="/nosotros" element={<Nosotros/>}/>
        <Route exact path="/departamentos" element={<Departamentos/>}/>
        <Route exact path="/tiendas" element={<Tiendas/>}/>
        <Route exact path="/carrito" element={<Carrito/>}/>
        <Route exact path="/envios" element={<Envios/>}/>
        <Route exact path="/" element={<Inicio/>}/>
        <Route path="/departamentos/:departamento" dataProducts={products} element={<Departamento/>}/>
        <Route path="/tiendas/:tienda" dataStores={stores} element={<Tienda/>}/>
        <Route path="/productos/:producto" dataProducts={products} element={<Producto/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

      <Whatsapp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;