import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/inicio.css';

function Ad() {

  return(
    <div id="carouselExampleIndicators" className="carousel slide w-100" data-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" 
        data-target="#carouselExampleIndicators" 
        data-slide-to="0" className="fas fa-circle active" 
        aria-current="true" 
        aria-label="Slide 1"></button>
        <button type="button" 
        data-target="#carouselExampleIndicators" 
        data-slide-to="1" 
        className="fas fa-circle" 
        aria-label="Slide 2"></button>
        <button type="button" 
        data-target="#carouselExampleIndicators" 
        data-slide-to="2" 
        className="fas fa-circle" 
        aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <Link to="/tiendas/carniceria-doña-eva" className="carousel-item active">
          <img src="https://1.bp.blogspot.com/-sJ6x3A8__uA/W2hNmaVNF_I/AAAAAAAACag/j3je8VHhsgwV42MDQ2lyVyOUzfcGa4eewCPcBGAYYCw/s1600/Banner%2BLa%2BPenso.jpg" className="d-block w-100" alt="Anuncio"/>
        </Link>
        <Link to="/productos/hamburguesas-doña-evo-hamburguesa" className="carousel-item">
          <img src="https://image.freepik.com/vector-gratis/mejor-anuncio-comida-pasta-italiana_23-2148455391.jpg" className="d-block w-100" alt="Anuncio"/>
        </Link>
        <Link to="/" className="carousel-item">
          <img src="https://assets.prestashop2.com/sites/default/files/wysiwyg/slider_0.png" className="d-block w-100" alt="Anuncio"/>
        </Link>
      </div>
      <button className="fas fa-chevron-left carousel-control-prev arrow" 
      type="button" 
      data-target="#carouselExampleIndicators" 
      data-slide="prev" 
      aria-hidden="true">
      </button>
      <button className="fas fa-chevron-right carousel-control-next arrow" 
      type="button" 
      data-target="#carouselExampleIndicators" 
      data-slide="next" 
      aria-hidden="true">
      </button>
    </div>
  );
}

export default Ad;