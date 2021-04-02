import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import '../csscomponents/producto.css';
import Info from './info';
import Add from './add';
import { products, information } from '../../data/data';

function Producto({data}) {
    const { producto } = useParams();
    const espacio = {
      padd: '8px 20px',
      mar: '20px 0px',
      ancho: 'auto'
    }

    return(
      <Fragment>
        {products.filter(data => data.link === producto).map(data => (
        <div key={data.id} className="container-producto">
        <div className="division-producto">
          <div className="container-img-producto">
            <div className="box-img-producto">
              <img src={data.img}/>
            </div>
            {information.filter(data => data.id === 9).map(data => (
              <Info key={data.id} props={data}/>
            ))}
          </div>
          <div className="container-info-producto">
            <div className="info-producto">
              <b className="nombre-producto">{data.product}</b>
              <b className="precio-producto">{data.price} {data.unity}</b>
              <p>{data.store}</p>
            </div>
            <div className="description-producto">
              <p>{data.description}</p>
            </div>
            <div className="cantidad-producto">
              <input type="number" min={data.quantity} defaultValue={data.quantity}/>
              <p>{data.unity} / ${data.price}</p>
            </div>
            <div className="add-to-cart">
              <Add props={espacio} product={data}/>
              <div className="redes-producto">
                  <a target="_blanck" href="#" id="facebook-producto" className="fab fa-facebook"></a>
                  <a target="_blanck" href="#" id="instagram-producto" className="fab fa-instagram"></a>
              </div>
              {information.filter(data => data.id === 4 || data.id === 6 || data.id === 8).map(data => (
                <Info key={data.id} props={data}/>
              ))}
              <img className="box-ad-producto" src="https://image.freepik.com/vector-gratis/mejor-anuncio-comida-pasta-italiana_23-2148455391.jpg"/>
            </div>
          </div>
        </div>
      </div>
      ))}
      </Fragment>
    );
}

export default Producto;