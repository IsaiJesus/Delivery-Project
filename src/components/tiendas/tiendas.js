import React, { useState } from 'react';
import '../csscomponents/tiendas.css';
import Section from '../global/section';
import Select from '../global/select';
import Tienda from './tienda';
import { titles, filter, tiendas } from '../../data/data';

function Tiendas() {
    const [checked, setChecked] = useState('all');
    const intitialId = 0;
    const finalId = 4;

    return(
      <div className="container-tiendas">
        {titles.filter(data => data.title === 'Tiendas').map(data => (
          <Section key={data.id} props={data}/>
        ))}
        <Select props={filter} intitialId={intitialId} finalId={finalId} valor={checked} handleChange={e => setChecked(e.target.value)}/>
        <div className="division-tiendas">
            {tiendas.map(tienda => {
                if(tienda.category === checked){
                    return <Tienda key={tienda.id} props={tienda}/>
                } else if(checked === 'all'){
                    return <Tienda key={tienda.id} props={tienda}/>     
                }
            })}
        </div>
      </div>
    );
}

export default Tiendas;