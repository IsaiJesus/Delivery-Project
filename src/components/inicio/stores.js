import React from 'react';
import '../csscomponents/free.css';
import Section from '../global/section';
import Tienda from '../tiendas/tienda';
import Todo from '../global/todo';
import { titles, tiendas, links } from '../../data/data';

function Stores() {

    return(
        <section className="container-free">
            {titles.filter(data => data.title === 'Tiendas').map(data => (
               <Section key={data.id} props={data}/>
            ))}
            <div className="division-free">
                {tiendas.slice(0, 8).map(data => (
                    <Tienda key={data.id} props={data}/>
                ))}
            </div>
            {links.filter(data => data.id === 4).map(data => (
                <Todo key={data.id} props={data}/>
            ))}
        </section>
    );
}

export default Stores;