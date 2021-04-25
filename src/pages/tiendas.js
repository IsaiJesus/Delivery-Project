import React, { useState } from 'react';
import '../styles/containerPages.css';
import TitleSection from '../components/titleSection';
import Filter from '../components/filter';
import CardStore from '../components/cardStore';
import { titles, filter, stores } from '../data/data';
import { Helmet } from 'react-helmet';

function Tiendas() {
  const [checked, setChecked] = useState('all');
  const intitialId = 0;
  const finalId = 4;

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Tiendas | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Tiendas').map(data => (
        <TitleSection key={data.id} title={data.title}/>
      ))}
      <Filter filter={filter} 
      intitialId={intitialId} 
      finalId={finalId} 
      value={checked} 
      handleChange={e => setChecked(e.target.value)}/>
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {stores.map(data => {
          if(data.category === checked){
            return <CardStore key={data.id} link={data.link} img={data.img} store={data.store}/>
          } else if(checked === 'all'){
            return <CardStore key={data.id} link={data.link} img={data.img} store={data.store}/>     
          }
        })}
      </div>
    </div>
  );
}

export default Tiendas;