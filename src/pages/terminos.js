import React from 'react';
import '../styles/nosotros.css';
import TitleSection from '../components/titleSection';
import { titles } from '../data/data';
import useTitle from '../hooks/useTitle';

function Terminos() {
  useTitle({ title: 'Términos y condiciones' });

  return(
    <div className="container-terminos d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Términos y condiciones').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-terminos container-xl p-0 my-4">
        <div className="col">
          <h5 className=" mb-3">Condiciones de compra</h5>
          <p className="mb-1">1. Los precios se encuentran en moneda nacional e incluyen I.V.A.</p>
          <p className="mb-1">2. Las imágenes, características, especificaciones y precios son ilustrativos 
          y pueden variar o cambiar sin previo aviso.</p>
          <p className="mb-1">3. La disponibilidad de los productos anunciados en nuestro servicio dependerá 
          del stock de cada tienda.</p>
          <p className="mb-1">4. Las compras de productos en nuestro servicio pueden ser, llamando al número 
            otorgado a los clientes o escribiéndonos un mensaje de WhatsApp al mismo número. En cualquiera de 
            las dos formas de compra se les pedirá la siguiente información: <br/>
            a) El nombre o nombres de los productos elegidos. <br/>
            b) El nombre de la tienda de cada producto. <br/>
            c) La cantidad de productos de cada tipo.</p>
          <p className="mb-1">4.1. En seguida de lo anterior, pediremos datos para el envío de los productos: <br/>
            a) Nombre de la persona que hace el pedido. <br/>
            b) La dirección a donde se hará entrega del envío. <br/>
            4.2. Cuando el consumidor nos da sus datos para hacer el envío de sus compras acepta los términos y 
            condiciones de este artículo.</p>
          <p className="mb-1">5. ORDEEM no pide más datos de los anunciados en este artículo, y estos sólo 
            serán usados con el propósito de que los productos lleguen a la dirección que indica el 
            consumidor que los requiere.</p>
          <p className="mb-1">6. En caso de que un mismo consumidor haga uso más de una vez de nuestro 
            servicio, se le preguntará si los datos dados para el envío pueden ser guardados para ser usados 
            únicamente en futuras compras dentro de nuestro servicio.</p>
          <p className="mb-1">7. La compraventa únicamente podrá realizarse por personas que tengan 18 años 
            de edad cumplidos o mayores a esta, por lo que las personas menores de 18 años de edad no podrán 
            realizar una compraventa, sino a través de su padre o tutor legal, o quien detente el ejercicio 
            de la patria potestad, guarda y custodia.</p>
          <p className="mb-1">8. ORDEEM se reserva el derecho de cancelar aquellos pedidos realizados por 
            el Usuario, en los siguientes supuestos: <br/>
            a) Cuando el usuario viole o no acepte los términos y condiciones. <br/>
            b) Cuando el usuario no haya cubierto el monto exacto de la compra. <br/>
            c) Si por algún error involuntario del sistema de la página web, se calcule mal el costo total 
            del pedido, el vendedor asignado le hará saber al comprador y en caso de que este se niegue a 
            pagar la cantidad faltante. <br/>
            d) Cuando el pago del usuario sea identificado como fraude o posible contra cargo. <br/>
            e) Cuando el producto pagado se encuentre agotado en el stock de la tienda solicitada y no sea 
            posible conseguirlo. <br/>
            f) Cuando por errores involuntarios en el sistema se lancen promociones o costos no autorizados, 
            en perjuicio del servicio. <br/>
            g) Cuando el usuario agreda física o verbalmente a uno de nuestros usuarios o trabajadores.</p> <br/>
          <h5 className=" mb-3">Ofertas, promociones y descuentos</h5>
          <p className="mb-1">1. En ocasiones específicas, se mostrarán en nuestros medios, ofertas, 
            promociones y descuentos, estos hechos por las tiendas asociadas o incluso el mismo servicio.</p>
          <p className="mb-1">2. Las imágenes, características, especificaciones y precios son específicos 
            y/o temporales, por lo que el usuario puede encontrar información de especificaciones en el 
            mismo contenido, de lo contrario, el usuario podrá solicitar información de estas promociones, 
            ofertas y/o descuentos a través de nuestras redes sociales o nuestro WhatsApp.</p> <br/>
          <h5 className="mb-3">Derechos del contenido</h5>
          <p className="mb-1">1. Las imágenes, logos, fotos y vídeos en nuestro sitio web, redes sociales y en 
            publicidad están sujetas a derechos de propiedad intelectual, por lo que no podrán ser usados por 
            un tercero para fines de venta.</p> <br/>
          <h5 className="mb-3">Formas de pago y envíos</h5>
          <p className="mb-1">1. La única forma de pago que tenemos hasta el momento es en efectivo, el cobro 
            de los productos se hará después de haber sido entregados al domicilio.</p>
          <p className="mb-1">2. El costo total de los envíos, se calcula con base al precio de los productos 
            requeridos más el costo del envío, este último se calcula dependiendo del punto de partida (lugar 
            donde se encuentra la tienda en donde se comprarán los productos), hasta el punto de llegada (la 
            dirección del comprador), el precio mínimo de envío es de $8.00 y el costo del mismo subirá conforme
            mayor distancia haya entre el punto de partida y el punto de llegada.</p>
          <p className="mb-1">3. El costo total es la suma del precio de los productos elegidos (estos van 
            a depender de cada tienda y cada producto), más el costo del envío.</p>
          <p className="mb-1">4. A la hora de hacer un pedido debe considerar lo siguiente: <br/>
            a) El monto total a pagar por el artículo debe ser exacto y en moneda nacional, incluyendo pesos 
            y centavos, el comprador deberá hacer el pago en seguida de haber recibido los productos. <br/>
            b) ORDEEM no está obligado a conservar, resguardar y/o apartar el producto si el mismo no fue 
            pagado. <br/>
            c) El consumidor podrá solicitar un recibo a la hora de hacer su pedido, el cual será entregado 
            al mismo tiempo de que se le entreguen sus productos. <br/>
            d) En caso de cancelación de pedido, deberá comunicarse con el servicio lo más pronto posible, 
            en caso de que el producto o productos ya hayan sido comprados no podrá hacer una cancelación, 
            a menos de que la tienda donde hayan sido comprados lo permita.</p> <br/>
          <h5 className="mb-3">Devoluciones, cambios y reembolsos</h5>
          <p className="mb-1">1. En caso de que haya sido entregado un producto en mal estado, para solicitar una 
            devolución, cambio o reembolso debe considerar lo siguiente: <br/>
            a) Si el producto fue entregado en malas condiciones, defectuoso, golpeado, inservible o caducado. 
            Si el producto no es el que fue pedido o no cumple con lo requerido como peso o cantidad. <br/>
            b) Enseguida de asegurarse de que el producto no fue entregado en las condiciones óptimas podrá 
            contactarnos para hacer un reclamo, le pediremos el recibo de la compra si lo solicito para hacer 
            más rápido el procedimiento. Nosotros verificaremos que el pedido no haya sufrido alteraciones 
            después de haber sido entregado. <br/>
            c) Nos pondremos de acuerdo con el comprador y dependiendo de los daños causados, la tienda donde 
            se compró el producto podrá ofrecerle un cambio, devolución o hasta un reembolso. <br/>
            d) ORDEEM no se hace responsable de posibles daños, y por consiguiente una reparación de los daños 
            causados a menos que estos hayan sido durante el envío.</p> <br/>
          <h5 className="mb-3">Reglas de conducta</h5>
          <p className="mb-1">1. Todos los usuarios de nuestro servicio, empleados, encargados de tiendas, 
            incluyendo clientes (compradores), deberán seguir las siguientes reglas: <br/>
            a) Actuar con respeto, honestidad y servicio a cualquier persona. <br/>
            b) Las tiendas se comprometen a cumplir con sus obligaciones impuestas junto con nuestro servicio. <br/>
            c) ORDEEM está al servicio del cliente, tienda colaboradora, o empleado dentro de este servicio. <br/>
            d) Todos los usuarios harán uso del servicio, tanto el sitio web, las redes sociales, y formas de 
            contacto con el resto de los usuarios de forma seria, honesta y respetuosa. <br/>
            e) En caso del incumplimiento de alguno de estos términos y condiciones por parte de los usuarios 
            de ORDEEM, se tomarán las medidas correspondientes para remediar los daños causados hacía el 
            servicio. <br/>
            d) En caso del incumplimiento de alguno de estos términos y condiciones por parte de nuestro 
            servicio serán discutidos con los inconformes y/o involucrados.</p> <br/>
          <h5 className="mb-1">Al hacer uso de nuestros servicios, compras, envíos, contactos, sitio web, 
            redes sociales, formas de contacto, trato con empleados, aceptas todos nuestros Términos y 
            Condiciones publicados en este artículo, y/o, en caso de que se haya hecho un acuerdo, con el 
            contenido publicado en dicho acuerdo. <br/> 
            En caso de necesitar información o datos de algún tipo que podamos brindarle bajo la legalidad, 
            puede solicitarlos contactándonos por cualquiera de nuestros medios de contacto.</h5>
        </div>
      </div>
    </div>
  );
}

export default Terminos;