import React from 'react';
import '../styles/nosotros.css';
import Section from '../components/section';
import { titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Nosotros() {

  return(
    <div className="container-terminos d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Nosotros | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Nosotros').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="division-terminos container-xl p-0 mb-4">
        <div className="col">
          <h4 className="text-center mb-3">ORDEEM</h4>
          <p className="mb-4">ORDEEM es un servicio de entregas de productos de diferentes tiendas locales, 
            ORDEEM surge a partir de la necesidad de la gente de hacer sus compras en tiendas locales 
            pero con el impedimento del virus actual, lo cual dificulta hacer estas compras a todas 
            las personas, principalmente a peronas mayores, a lo que nuestro servicio trata de facilitar 
            este proceso dando el servicio de enviar estos productos hasta el hogar del consumidor, 
            de la misma manera apoyando negocios locales en los que disminuyeron sus ventas por la misma 
            razón del virus y nuestro propósito es apoyar a los consumidores y a negocios locales.
          </p>
        </div>
        <div className="col">
          <h4 className="text-center mb-3">Objetivo</h4>
          <p className="mb-4">Nuestros objetivos principales son apoyar a gente local, facilitar a nuestros usuarios 
            en sus compras enviando sus productos hasta su hogar, esto para evitar que la gente salga 
            de sus casas, principalmente gente mayor de edad, esto por la situción del virus actual. 
            De la misma manera apoyar a los negocios locales aumentando las ventas de estos mismos a 
            través de nuestros medios. Y que en un futuro, dentro de nuestras posibilidades crear empleos 
            para aumentar la economía local.   
          </p>
        </div>
        <div className="col">
          <h4 className="text-center mb-3">Valores</h4>
          <p className="mb-4">En ORDEEM nos aseguramos de llevar a cabo valores que mejoren nuestra relación tanto con nuestros 
            usuarios compradores como nuestros usuarios vendedores. Les damos el respeto que se merecen a 
            cada uno de nuestros usuarios, inculcamos la honestidad a nuestros usuarios, cuando requieran de 
            información de nuestro servicio, Damos nuestro mejor servicio al cliente a quien lo necesite. 
            Tratamos de brindar de la mejor seguridad a nuestros compradores, vendedores  y trabajadores de 
            nuestro servicio. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;