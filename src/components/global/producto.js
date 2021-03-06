import React from 'react';
import '../csscomponents/producto.css';
import Info from './info';
import Add from './add';
import Whatsapp from './whatsapp';
import Footer from './footer';

function Producto() {
    const info1 = {
        info: 'Este producto se agota muy rápido, puedes preguntar si aún está disponible llamando al 7351234567 o mandando un mensaje al Whatsapp.'
    }
    const info2 = {
        info: 'Al terminar de agregar todos los productos al carrito podrás ver el costo total de tus compras en la sección del carrito.'
    }
    const info3 = {
        info: 'Puedes hacer tu pedido llamando a 7351234567 o mandándo un Whatsapp al mismo número.'
    }
    const info4 = {
        info: 'Si tienes alguna duda puedes preguntar al chatbot, mándando un mensaje directo a nuestras redes sociales, o bien, ver la sección de "Preguntas frecuentes" que se encuentra en el footer.'
    }
    const espacio = {
      padd: '8px 20px',
      mar: '20px 0px',
      ancho: 'auto'
    }

    return(
      <div className="container-producto">
        <div className="division-producto">
          <div className="container-img-producto">
            <div className="box-img-producto">
              <img src="https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/c/o/costilla-de-cerdo-para-parrilla-1-kg392386_x1.jpg"/>
            </div>
            <Info props={info1}/>
          </div>
          <div className="container-info-producto">
            <div className="info-producto">
              <b className="nombre-producto">Nombre del producto</b>
              <b className="precio-producto">$Precio$</b>
              <p>Nombre de la tienda</p>
            </div>
            <div className="description-producto">
              <p>Descripción del producto, este es un ejemplo de la descripción del producto, donde se describirá las características del producto, específicamente de la calidad.</p>
            </div>
            <div className="cantidad-producto">
              <input type="number"/>
              <p>Kg/$precio$</p>
            </div>
            <div className="add-to-cart">
              <Add props={espacio}/>
              <div className="redes-producto">
                  <a href="#" id="facebook-producto" className="fab fa-facebook"></a>
                  <a href="#" id="instagram-producto" className="fab fa-instagram"></a>
              </div>
              <Info props={info2}/>
              <Info props={info3}/>
              <Info props={info4}/>
              <a href="#" className="box-ad-producto">
                <img src="https://image.freepik.com/vector-gratis/mejor-anuncio-comida-pasta-italiana_23-2148455391.jpg"/>
              </a>
            </div>
          </div>
        </div>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Producto;