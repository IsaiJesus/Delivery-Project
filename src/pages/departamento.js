import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/containerPages.css';
import TitleSection from '../components/titleSection';
import CardProduct from '../components/cardProduct';
import { products, titles } from '../data/data';
import useTitle from '../hooks/useTitle';

function Departamento({dataProducts}) {
  const { departamento } = useParams();

  const title = titles.filter(dataTitles => 
  dataTitles.category === departamento).map(dataTitles => dataTitles.title);
  useTitle({ title: title });

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.category === departamento).map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {products.filter(dataProducts => dataProducts.category === departamento).map(dataProducts => (
          <CardProduct key={dataProducts.id}
          productSelected={dataProducts} 
          link={dataProducts.link} 
          img={dataProducts.img} 
          nameProduct={dataProducts.nameProduct} 
          price={dataProducts.price} 
          unity={dataProducts.unity}
          store={dataProducts.store}/>
        ))}
      </div>
    </div>
  );
}

export default Departamento;