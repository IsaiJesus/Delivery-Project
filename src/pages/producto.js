import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/producto.css';
import Info from '../components/info';
import Add from '../components/add';
import { products, information } from '../data/data';
import { Helmet } from 'react-helmet';

function Producto({data}) {
  const { producto } = useParams();
  const [counter, setCounter] = useState(1);

  const title = products.filter(data => data.link === producto).map(data => data.product);

  return(
    <div className="container-fluid p-0">
      <Helmet>
        <title>{`${title} | ORDEEM`}</title>
      </Helmet>
      {products.filter(data => data.link === producto).map(data => (
        <div key={data.id} className="container-producto d-flex flex-column align-items-center justify-content-center">
        <div className="division-producto container-xl row row-cols-1 row-cols-md-2 p-0 my-4">
          <div className="col p-0 d-flex flex-column align-items-center">
            <div className="box-img-producto d-flex align-items-center justify-content-center m-3 p-2">
              <img src={data.img} alt={data.product}/>
            </div>
            {information.filter(data => data.id === 3).map(data => (
              <Info key={data.id} props={data}/>
            ))}
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center col p-3">
            <div className="info-producto w-100 d-flex flex-column p-2">
              <b className="nombre-producto">{data.product}</b>
              <b className="precio-producto">{data.price}/{data.unity}</b>
              <p className="m-0">{data.store}</p>
            </div>
            <div className="description-producto w-100">
              <p className="m-0 p-2">{data.description}</p>
            </div>
            <div className="cantidad-producto w-100 text-center py-3">
              <div className="d-flex justify-content-center">
                <button className="btn-quantity" onClick={() => setCounter(counter - 1)}>-</button>
                <input readOnly type="number" min="1" value={counter}/>
                <button className="btn-quantity" onClick={() => setCounter(counter + 1)}>+</button>
              </div>  
              <p className="m-0">{data.unity}/{(data.price*counter).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <Add product={data}/>
              <div className="redes-producto my-2">
                  <a target="_blanck" href="#" id="facebook-producto" className="fab fa-facebook m-3"></a>
                  <a target="_blanck" href="#" id="instagram-producto" className="fab fa-instagram m-3"></a>
              </div>
              {information.filter(data => data.id === 4 || data.id === 6 || data.id === 8  || data.id === 9).map(data => (
                <Info key={data.id} props={data}/>
              ))}
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Producto;