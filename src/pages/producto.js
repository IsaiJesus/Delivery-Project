import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/producto.css';
import Alert from '../components/alert';
import ButtonAdd from '../components/buttonAdd';
import { products, information } from '../data/data';
import useTitle from '../hooks/useTitle';

function Producto({dataProducts}) {
  const { producto } = useParams();

  const title = products.filter(dataProducts => 
  dataProducts.link === producto).map(dataProducts => dataProducts.nameProduct);
  useTitle({ title: title });

  return(
    <div className="container-fluid p-0">
      {products.filter(dataProducts => dataProducts.link === producto).map(dataProducts => (
        <div key={dataProducts.id} className="container-producto d-flex flex-column align-items-center justify-content-center">
        <div className="division-producto container-xl row row-cols-1 row-cols-md-2 p-0 my-4">
          <div className="col p-0 d-flex flex-column align-items-center">
            <div className="box-img-producto d-flex align-items-center justify-content-center m-3 p-2">
              <img src={dataProducts.img} alt={dataProducts.nameProduct}/>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-start col p-3">
            <div className="info-producto w-100 d-flex flex-column pt-0 px-2 pb-2">
              <b className="nombre-producto">{dataProducts.nameProduct}</b>
              <b className="precio-producto">{dataProducts.price.toLocaleString("en", {style: "currency", currency: "USD"})}
              /{dataProducts.unity}</b>
              <p className="m-0">{dataProducts.store}</p>
            </div>
            <div className="description-producto w-100 p-2">
              <p className="m-0">{dataProducts.description}</p>
            </div>
            <div className="cantidad-producto w-100 text-center py-3">
              <p className="m-0">{dataProducts.quantity} {dataProducts.unity}/{(dataProducts.price).toLocaleString("en", {style: "currency", currency: "USD"})}</p>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <ButtonAdd productSelected={dataProducts}/>
              <div className="redes-producto my-2">
                <a target="_blanck" 
                href="https://www.facebook.com/Ordeem-107178701527320/" 
                id="facebook-producto" 
                className="fab fa-facebook m-3"></a>
                <a target="_blanck" 
                href="https://www.instagram.com/ordeem_serv/" 
                id="instagram-producto" 
                className="fab fa-instagram m-3"></a>
              </div>
              {information.filter(dataInformation => 
              dataInformation.id === 3 || 
              dataInformation.id === 4 || 
              dataInformation.id === 5).map(dataInformation => (
                <Alert key={dataInformation.id} text={dataInformation.text}/>
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