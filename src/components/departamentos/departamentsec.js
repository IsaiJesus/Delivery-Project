import React from 'react';
import '../csscomponents/departaments.css';
import Prodep from '../global/prodep';
import Section from '../global/section';
import departments, { titles } from '../../data/data';

function Departamentsec() {

    return(
        <section className="container-departaments">
            {titles.filter(data => data.title === 'Departamentos').map(data => (
                <Section key={data.id} props={data}/>
            ))}
            <div className="division-departaments">
                {departments.map(data => (
                    <Prodep key={data.id} props={data}/>
                ))}
            </div>
        </section>
    );
}

export default Departamentsec;