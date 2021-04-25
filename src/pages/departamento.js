import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/containerPages.css';
import TitleSection from '../components/titleSection';
import CardProduct from '../components/cardProduct';
import { products, titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Departamento({data}) {
  const { departamento } = useParams();

  const title = titles.filter(data => data.category === departamento).map(data => data.title);

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>{`${title} | ORDEEM`}</title>
      </Helmet>
      {titles.filter(data => data.category === departamento).map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {products.filter(data => data.category === departamento).map(data => (
          <CardProduct key={data.id}
          productSelected={data} 
          link={data.link} 
          img={data.img} 
          nameProduct={data.nameProduct} 
          price={data.price} 
          store={data.store}/>
        ))}
      </div>
    </div>
  );
}

export default Departamento;