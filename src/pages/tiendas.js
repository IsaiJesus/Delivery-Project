import React, { useState } from 'react';
import '../styles/containerPages.css';
import TitleSection from '../components/titleSection';
import Filter from '../components/filter';
import CardStore from '../components/cardStore';
import { titles, filter, stores } from '../data/data';
import useTitle from '../hooks/useTitle';

function Tiendas() {
  useTitle({ title: 'Tiendas' });

  const [checked, setChecked] = useState('all');
  const intitialId = 0;
  const finalId = 4;

  return(
    <div className="container-page d-flex flex-column align-items-center justify-content-center">
      {titles.filter(dataTitles => dataTitles.title === 'Tiendas').map(dataTitles => (
        <TitleSection key={dataTitles.id} title={dataTitles.title}/>
      ))}
      <Filter filter={filter} 
      intitialId={intitialId} 
      finalId={finalId} 
      value={checked} 
      handleChange={e => setChecked(e.target.value)}/>
      <div className="division-page container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {stores.map(dataStores => {
          if(dataStores.category === checked){
            return <CardStore key={dataStores.id} 
            link={dataStores.link} 
            img={dataStores.img} 
            store={dataStores.store}/>
          } else if(checked === 'all'){
            return <CardStore key={dataStores.id} 
            link={dataStores.link} 
            img={dataStores.img} 
            store={dataStores.store}/>     
          }
        })}
      </div>
    </div>
  );
}

export default Tiendas;