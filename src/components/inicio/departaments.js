import React from 'react';
import '../csscomponents/departaments.css';
import Prodep from '../global/prodep';
import Section from '../global/section';
import Todo from '../global/todo';
import departments, { titles, links } from '../../data/data';

function Departaments() {

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
            {links.filter(link => link.id === 2).map(link => (
                <Todo key={link.id} props={link}/>
            ))}
        </section>
    );
}

export default Departaments;