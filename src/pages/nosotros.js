import React from 'react';
import '../styles/nosotros.css';
import TitleSection from '../components/titleSection';
import { titles } from '../data/data';
import useTitle from '../hooks/useTitle';

function Nosotros() {
  useTitle({ title: 'Nosotros' });

  return(
    <div className="container-terminos d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Nosotros').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-terminos container-xl p-0 mb-4">
        <div className="col">
          <h4 className="text-center mb-3">ORDEEM</h4>
          <p className="mb-4">ORDEEM es un servicio de entregas de productos a domicilio de diferentes tiendas 
            locales, ORDEEM surge a partir de la necesidad de la gente de hacer sus compras en tiendas 
            locales, pero con el impedimento de salir de su casa e ir por sus productos, que en ocaciones son 
            en lugares bastante lejanos a su hogar, lo cual dificulta hacer estas compras a todas las 
            personas, principalmente a peronas mayores o con muchas ocupaciones, a lo que ORDEEM trata de 
            facilitar este proceso dando el servicio de enviar estos productos hasta el hogar del consumidor, 
            de la misma manera apoyando negocios locales y nuestro propósito es apoyar a gente local.
          </p>
        </div>
        <div className="col">
          <h4 className="text-center mb-3">Objetivo</h4>
          <p className="mb-4">Nuestros objetivos principales son apoyar a gente local, facilitando a nuestros 
            usuarios en sus compras enviando sus productos hasta su hogar, esto para evitar que la gente salga 
            de sus casas, ya que al hacerlo ocupan gran parte de su tiempo, y también evitando riesgos que se 
            podrían dar al momento de salir, principalmente a gente mayor de edad. De la misma manera apoyar a 
            los negocios locales aumentando las ventas de estos mismos a través de nuestros medios. Y que en un 
            futuro, dentro de nuestras posibilidades crear empleos para aumentar la economía local.   
          </p>
        </div>
        <div className="col">
          <h4 className="text-center mb-3">Valores</h4>
          <p className="mb-4">En ORDEEM nos aseguramos de llevar a cabo valores que mejoren nuestra relación 
            tanto con nuestros usuarios compradores, usuarios vendedores y trabajadores del mismo servicio. 
            Les damos el respeto que se merecen a cada uno de nuestros usuarios, inculcamos la honestidad a 
            nuestros usuarios, cuando requieran de información de nuestro servicio, Damos nuestro mejor 
            servicio al cliente a quien lo necesite. Tratamos de brindar de la mejor seguridad a nuestros 
            compradores, vendedores y trabajadores de nuestro servicio, tanto al momento de hacer compras, 
            vender productos y hacer entrega de los mismos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;