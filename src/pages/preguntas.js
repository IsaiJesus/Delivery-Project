import React from 'react';
import '../styles/nosotros.css';
import TitleSection from '../components/titleSection';
import { titles } from '../data/data';
import useTitle from '../hooks/useTitle';

function Preguntas() {
  useTitle({ title: 'Preguntas frecuentes' });

  return(
    <div className="container-terminos d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Preguntas frecuentes').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-terminos container-xl p-0 mt-3 mb-4">
        <div className="accordion" id="accordion-preguntas">
          <div className="card">
            <div className="card-header" id="pregunta-uno">
              <button className="btn btn-link btn-block text-left" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-uno" 
              aria-expanded="true" 
              aria-controls="collapse-uno">
                <h5 className="m-0">¿Cómo se compra en ORDEEM?</h5>
              </button>
            </div>
            <div id="collapse-uno" 
            className="collapse show" 
            aria-labelledby="pregunta-uno" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Hay varias maneras de hacer compras en ORDEEM, 
                puedes entrar a comprar desde nuestra página web www.ordeem.com donde puedes enlistar tus 
                productos y en la sección del "Carrito" podrás ver el costo total de los productos para 
                después darnos los datos para el envío y saber el costo del envío. Si ya tienes tus productos 
                elegidos, puedes hacer tu pedido llamando a 735 244 9749 o mandarnos la lista de tus productos 
                a través del WhatsApp del mismo número, te pediremos tu nombre y dirección. Si es por llamada 
                teléfonica nosotros enlistaremos tus productos y te pediremos los datos para contactarte. Los 
                datos que nos des no serán utilizados más que a la hora de hacer el envío, para más información 
                puedes ver la sección de "Términos y condiciones". Una vez hecho el pedido, iremos por los 
                productos y te lo enviaremos hasta tu casa, momentos antes de llegar te contactaremos para 
                avisarte que tu pedido está por llegar.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-dos">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-dos" 
              aria-expanded="false" 
              aria-controls="collapse-dos">
                <h5 className="m-0">¿Cómo puedo encontrar un producto o tienda específico?</h5>
              </button>
            </div>
            <div id="collapse-dos" 
            className="collapse" 
            aria-labelledby="pregunta-dos" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Para encontrar un producto específico o una tienda específica, hay diferentes 
                maneras de hacerlo, puedes entrar a la sección de "Departamentos" para encontrar productos de 
                una categoría específica, puedes entrar en la sección de "Tiendas" para encontrar una tienda 
                específica, o la manera más rápida de hacerlo es escribiendo el departamento, tienda o producto 
                que desees en el buscador. Si no encuentras lo que deseas, es posible que no este incluido en 
                la página web, aún así puedes pedir el producto y posiblemente será agregado en un futuro.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-tres">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-tres" 
              aria-expanded="false" 
              aria-controls="collapse-tres">
                <h5 className="m-0">¿Cómo puedo saber el costo de envío para mi dirección?</h5>
              </button>
            </div>
            <div id="collapse-tres" 
            className="collapse" 
            aria-labelledby="pregunta-tres" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                En la sección de "Envíos" podrás encontrar los lugares disponibles a donde se hacen envíos.
                El costo del envío se determina desde el punto de partida (lugar donde se encuentra la tienda 
                donde se comprarán los productos). No hay una manera determinada de saber el costo de un 
                envío específico, pero a la hora de confirmar el pedido se te informará de cuál es el costo 
                del envío y si estás de acuerdo. Habrá algunas formas en las que pueden haber descuentos de envíos
                o incluso envíos gratis, estos se informarán a través de anuncios en la página y/o nuestras 
                redes sociales. Para más información puedes ver la sección de "Términos y condiciones".
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-cuatro">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-cuatro" 
              aria-expanded="false" 
              aria-controls="collapse-cuatro">
                <h5 className="m-0">¿Qué métodos de pagos aceptan?</h5>
              </button>
            </div>
            <div id="collapse-cuatro" 
            className="collapse" 
            aria-labelledby="pregunta-cuatro" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Actualmente nuestra única forma de recibir el pago por nuestro servicio es un pago en efectivo 
                a la hora de hacer la entrega del pedido. Esto es temporal, prontó se aceptarán pagos con 
                tarjetas y compras a través de la página web. Puedes obtener más información en la sección de 
                "Términos y condiciones".
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-cinco">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-cinco" 
              aria-expanded="false" 
              aria-controls="collapse-cinco">
                <h5 className="m-0">¿Cómo puedo contactar con el servicio?</h5>
              </button>
            </div>
            <div id="collapse-cinco" 
            className="collapse" 
            aria-labelledby="pregunta-cinco" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Si tienes alguna duda, puedes contactarnos en nuestras redes sociales en un mensaje directo, 
                nos puedes encontrar como Ordeem en facebook y @ordeem_serv en instagram, Para temas de un 
                envío, puedes hacerlo a través de nuestro WhatsApp al 735 244 9749. Si quieres contactarnos 
                para un tema más específico puedes mandarnos un correo electrónico a contacto@ordeem.com.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-seis">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-seis" 
              aria-expanded="false" 
              aria-controls="collapse-seis">
                <h5 className="m-0">¿Qué puedo hacer si mi pedido tarda en llegar o no llega?</h5>
              </button>
            </div>
            <div id="collapse-seis" 
            className="collapse" 
            aria-labelledby="pregunta-seis" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Al hacer un pedido, te daremos un estimado del tiempo de llegada, esto depende de tu ubicación,  
                la cantidad productos que pidas y las tiendas donde vendan los productos. Si el pedido tarda más 
                de el tiempo estimado puedes escribirnos al WhatsApp y te daremos la razón de la tardanza. 
                Si hubo un problema y no se entrega el pedido, lo puedes arreglar llamando o escribiendónos al 
                WhatsApp, pero por cualquier motivo de retraso de la entrega, lo más posible es que 
                nosotros contáctemos contigo. 
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-siete">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-siete" 
              aria-expanded="false" 
              aria-controls="collapse-siete">
                <h5 className="m-0">¿Qué hago si un producto me llega en mal estado?</h5>
              </button>
            </div>
            <div id="collapse-siete" 
            className="collapse" 
            aria-labelledby="pregunta-siete" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Antes de hacer un reclamo por un producto que pudo haber llegado en mal estado, tienes que 
                asegurarte de los siguientes puntos: 1. El producto estaba en mal estado al momento de 
                ser entregado. 2. Tuvo algún defecto de fabrica o se encontraba en descomposición en caso de 
                un producto orgánico. Después de verificar esto, Puedes contactar con nosotros para dar una 
                solución, dependiendo de la gravedad del mal estado del producto, podemos cambiarte el 
                producto por uno nuevo, sustituirlo por otro producto, o en el ultimo de los casos devolverte 
                tu dinero. Todo esto dependerá de las condiciones en las que haya sido entregado el producto 
                y la disposición que tenga la tienda donde fue comprado el producto de remediar la situación, 
                de la misma manera, también nos aseguraremos de que el producto no haya sufrido alguna 
                alteración después de la entrega. En este caso, no te daremos solución y en un próximo caso 
                de este tipo, daremos menos atención a tu caso. Para más información puedes ver la sección 
                de "Términos y condiciones". 
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-ocho">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-ocho" 
              aria-expanded="false" 
              aria-controls="collapse-ocho">
                <h5 className="m-0">¿Cuál es la dinámica de las promociones, ofertas y/o descuentos?</h5>
              </button>
            </div>
            <div id="collapse-ocho" 
            className="collapse" 
            aria-labelledby="pregunta-ocho" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Cuando entras a la página web de nuestro servicio o a nuestras redes sociales, podrías 
                encontrar algún anuncio de promoción, oferta o decuento de alguna tienda o de nosotros mismos, 
                si es de algún producto o conjunto de productos, puedes ver la información en el post en 
                nuestras redes sociales de esa publicación, o en nuestra página web dando clic a la imagen de 
                la promoción. Si quieres incluir esa promoción, oferta, o descuento, a la hora de hacer tu 
                compra, menciona la promoción que deseas y te daremos información de ello y te haremos la 
                entrega. Para más información de promociones, ofertas y descuentos, puedes ver la sección de 
                "Términos y condiciones".
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-nueve">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-nueve" 
              aria-expanded="false" 
              aria-controls="collapse-nueve">
                <h5 className="m-0">¿Cómo puedo hacer para que mis productos estén en ORDEEM?</h5>
              </button>
            </div>
            <div id="collapse-nueve" 
            className="collapse" 
            aria-labelledby="pregunta-nueve" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Si te interesa dar a conocer tus productos en nuestro sitio web y nuestras redes sociales, 
                puedes enviarnos un mensaje directo en nuestras redes sociales, donde te daremos información 
                básica de nuestra forma de trabajar, después de eso, si te interesa, te daremos información a 
                través de nuestro correo electrónico de nuestros términos, políticas y condiciones de nuestro 
                servicio para estar dentro de nuestro sitio web y nuestras redes sociales, y que de esta forma 
                tus productos se den a conocer más y tengas mayores ventas de los mismos.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-diez">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-diez" 
              aria-expanded="false" 
              aria-controls="collapse-diez">
                <h5 className="m-0">¿Cómo puedo trabajar dentro de ORDEEM?</h5>
              </button>
            </div>
            <div id="collapse-diez" 
            className="collapse" 
            aria-labelledby="pregunta-diez" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Si quieres trabajar con nosotros puede haber distintas maneras de hacerlo, primero, si hay 
                disponibilidad en un campo requerido, que pueden ser desde repartidor o administrador, puede 
                que publiquemos en el sitio o nuestras redes sociales que buscamos a alguien que cumpla con 
                nuestros requisitos para uno de estos campos, pero de cualquier manera, puedes preguntarnos a 
                nuestras redes sociales. Si hay disponibilidad de un campo, te pediremos información para saber 
                si cumples con nuestros requerimientos de la forma de trabajo, y, posteriormente te daremos a 
                conocer nuestra forma de trabajo. 
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="pregunta-once">
              <button className="btn btn-link btn-block text-left collapsed" 
              type="button" 
              data-toggle="collapse" 
              data-target="#collapse-once" 
              aria-expanded="false" 
              aria-controls="collapse-once">
                <h5 className="m-0">¿Qué pasa si incumplo alguno de los términos y condiciones de uso del servicio o del sitio web?</h5>
              </button>
            </div>
            <div id="collapse-once" 
            className="collapse" 
            aria-labelledby="pregunta-once" 
            data-parent="#accordion-preguntas">
              <div className="card-body">
                Antes de hacer uso de nuestro sitio web, como nuestras redes sociales o formas de contacto, 
                le recomendamos leer nuestros términos y condiciones, ya que al incumplir alguno de ellos 
                tomará una consecuencia dependiendo del caso, además de que al hacer uso de los medios de ORDEEM, 
                está de acuerdo con cada uno de los puntos de nuestros términos y condiciones.
                Para más información, le recomendamos leer la sección de "Términos y condiciones" donde 
                puede enterarse del uso correcto de cada uno de nuestros medios.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preguntas;