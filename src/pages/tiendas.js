import React, { useState } from 'react';
import '../styles/tiendas.css';
import Section from '../components/section';
import Select from '../components/select';
import Store from '../components/store';
import { titles, filter, tiendas } from '../data/data';
import { Helmet } from 'react-helmet';

function Tiendas() {
  const [checked, setChecked] = useState('all');
  const intitialId = 0;
  const finalId = 4;

  return(
    <div className="container-tiendas d-flex flex-column align-items-center justify-content-center">
      <Helmet>
        <title>Tiendas | ORDEEM</title>
      </Helmet>
      {titles.filter(data => data.title === 'Tiendas').map(data => (
        <Section key={data.id} props={data}/>
      ))}
      <Select props={filter} intitialId={intitialId} finalId={finalId} valor={checked} handleChange={e => setChecked(e.target.value)}/>
      <div className="division-tiendas container-xl row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 p-0 mb-4">
        {tiendas.map(tienda => {
          if(tienda.category === checked){
            return <Store key={tienda.id} props={tienda}/>
          } else if(checked === 'all'){
            return <Store key={tienda.id} props={tienda}/>     
          }
        })}
      </div>
    </div>
  );
}

export default Tiendas;