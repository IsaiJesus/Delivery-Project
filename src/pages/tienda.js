import React from 'react';
import '../styles/containerPages.css';
import { useParams } from 'react-router-dom';
import TitleSection from '../components/titleSection';
import CardProduct from '../components/cardProduct';
import { titles, products, hour } from '../data/data';
import useTitle from '../hooks/useTitle';
import Hour from '../components/hour';

function Tienda({dataStores}) {
  const { tienda } = useParams();

  const title = titles.filter(dataTitles => dataTitles.category === tienda).map(dataTitles => dataTitles.title);
  useTitle({ title: title });

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.category === tienda).map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      {hour.filter(dataHours => dataHours.category === tienda).map(dataHours => (
        <Hour key={dataHours.id} hour={dataHours.hour}/>
      ))}
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {products.filter(dataProducts => dataProducts.categoryStore === tienda).map(dataProducts => (
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

export default Tienda;