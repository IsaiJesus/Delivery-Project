import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/departamento.css';
import Section from '../components/section';
import CardProduct from '../components/cardProduct';
import { products, titles } from '../data/data';
import { Helmet } from 'react-helmet';

function Departamento({data}) {
  const { departamento } = useParams();

  const title = titles.filter(data => data.category === departamento).map(data => data.title);

  return(
    <div className="container-departamento d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>{`${title} | ORDEEM`}</title>
      </Helmet>
      {titles.filter(data => data.category === departamento).map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <div className="division-departamento container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {products.filter(data => data.category === departamento).map(data => (
          <CardProduct key={data.id} props={data}/>
        ))}
      </div>
    </div>
  );
}

export default Departamento;