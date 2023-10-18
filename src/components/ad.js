import React from 'react';
import { Link } from 'react-router-dom';
import { ads } from '../data/data';
import '../styles/inicio.css';

function Ad() {

  return(
    <div id="carouselExampleIndicators" className="carousel slide w-100" data-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" 
        data-target="#carouselExampleIndicators" 
        data-slide-to="0" 
        className="fas fa-circle active" 
        aria-current="true" 
        aria-label="Slide 1"></button>
        {ads.map(dataAds => (
          <button key={dataAds.id}
          type="button" 
          data-target="#carouselExampleIndicators" 
          data-slide-to={dataAds.id} 
          className="fas fa-circle" 
          aria-label={dataAds.slideNum}></button>
        ))}
      </div>
      <div className="carousel-inner">
        <Link to="/" className="carousel-item active">
          <img src="/images/banner_ad_delivery.jpg" 
          className="d-block w-100" 
          alt="ORDEEM servicio de envios"/>
        </Link>
        {ads.map(dataAds => (
          <Link key={dataAds.id}
          to={dataAds.link} 
          className="carousel-item">
          <img src={dataAds.img} 
          className="d-block w-100" 
          alt={dataAds.alt}/>
        </Link>
        ))}
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