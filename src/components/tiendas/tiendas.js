import React, { useState } from 'react';
import '../csscomponents/tiendas.css';
import Section from '../global/section';
import Select from '../global/select';
import Tienda from './tienda';
import Footer from '../global/footer';
import Whatsapp from '../global/whatsapp';

function Tiendas() {
    const tiendas = [
        {
            id: '1',
            color: '#8338EC',
            text: 'Carnicería Doña Eva',
            link: '/tiendas/carniceria-doña-eva',
            category: 'carnec'
        },
        {
            id: '2',
            color: '#FFBE0B',
            text: 'Carnicería Mario',
            link: '/tiendas/carniceria-doña-eva',
            category: 'carnec'
        },
        {
            id: '3',
            color: '#FF006E',
            text: 'Fonda Mario',
            link: '/tiendas/carniceria-doña-eva',
            category: 'comida'
        },
        {
            id: '4',
            color: '#3A86FF',
            text: 'Fonda Doña Cata',
            link: '/tiendas/carniceria-doña-eva',
            category: 'comida'
        },
        {
            id: '5',
            color: '#00BBF9',
            text: 'Abarrotes Doña Lucy',
            link: '/tiendas/carniceria-doña-eva',
            category: 'abarrotes'
        },
        {
            id: '6',
            color: '#FB5607',
            text: 'Abarrotes Rosa',
            link: '/tiendas/carniceria-doña-eva',
            category: 'carnec'
        }
    ];
    const titulo = {
        title: 'Tiendas'
    }
    const categorys = [
        {
            id: '0',
            text: 'Todo',
            category: 'all'
        },
        {
            id: '1',
            text: 'Carne de cerdo',
            category: 'carnec'
        },
        {
            id: '2',
            text: 'Carne de pollo',
            category: 'carnep'
        },
        {
            id: '3',
            text: 'Carne de res',
            category: 'carner'
        },
        {
            id: '4',
            text: 'Abarrotes',
            category: 'abarrotes'
        },
        {
            id: '5',
            text: 'Frutas y verduras',
            category: 'frutasverduras'
        },
        {
            id: '6',
            text: 'Comida',
            category: 'comida'
        }
    ];
    const [checked, setChecked] = useState('all');

    return(
      <div className="container-tiendas">
        <Section props={titulo}/>
        <Select props={categorys} valor={checked} handleChange={e => setChecked(e.target.value)}/>
        <div className="division-tiendas">
            {tiendas.map(tienda => {
                if(tienda.category == checked){
                    return <Tienda key={tienda.id} props={tienda}/>
                } else if(checked == 'all'){
                    return <Tienda key={tienda.id} props={tienda}/>     
                }
            })}
        </div>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Tiendas;