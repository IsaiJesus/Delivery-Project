import React from 'react';
import '../styles/tienda.css';
import { useParams } from 'react-router-dom';
import Section from '../components/section';
import CardProduct from '../components/cardProduct';
import { titles, products } from '../data/data';
import { Helmet } from 'react-helmet';

function Tienda({data}) {
  const { tienda } = useParams();

  const title = titles.filter(data => data.category === tienda).map(data => data.title);

  return(
    <div className="container-tienda d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>{`${title} | ORDEEM`}</title>
      </Helmet>
      {titles.filter(data => data.category === tienda).map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="division-tienda container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {products.filter(data => data.categoryStore === tienda).map(data => (
          <CardProduct key={data.id} props={data}/>
        ))}
      </div>
    </div>
  );
}

export default Tienda;