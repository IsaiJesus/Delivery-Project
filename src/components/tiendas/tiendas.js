import React from 'react';
import '../csscomponents/tiendas.css';
import Section from '../global/section';
import Select from '../global/select';
import Tienda from './tienda';
import Footer from '../global/footer';
import Whatsapp from '../global/whatsapp';

function Tiendas() {
    const eva = {
        color: '#8338EC',
        text: 'Carnicería Doña Eva',
        link: '/tiendas/carniceria-doña-eva'
    }
    const mario = {
        color: '#FFBE0B',
        text: 'Carnicería Mario',
        link: '/tiendas/carniceria-doña-eva'
    }
    const commario = {
        color: '#FF006E',
        text: 'Fonda Mario',
        link: '/tiendas/carniceria-doña-eva'
    }
    const cata = {
        color: '#3A86FF',
        text: 'Fonda Doña Cata',
        link: '/tiendas/carniceria-doña-eva'
    }
    const lucy = {
        color: '#00BBF9',
        text: 'Abarrotes Doña Lucy',
        link: '/tiendas/carniceria-doña-eva' 
    }
    const rosa = {
        color: '#FB5607',
        text: 'Abarrotes Rosa',
        link: '/tiendas/carniceria-doña-eva' 
    }
    const tiendas = {
        title: 'Tiendas'
    }
    const options = {
        text: 'Filtrar por:',
        option1: 'Amayuca',
        option2: 'Jantetelco',
        option3: 'Jonacatepec',
        option4: 'Chalca',
        option5: 'Temoac',
        option6: 'Zacualpan',
        option7: 'Huazulco',
        align: 'flex-end', 
        mar: '15px 4% 15px 0px'
    }

    return(
      <div className="container-tiendas">
        <Section props={tiendas}/>
        <Select props={options}/>
        <div className="division-tiendas">
            <Tienda props={eva}/>
            <Tienda props={rosa}/>
            <Tienda props={cata}/>
            <Tienda props={lucy}/>
            <Tienda props={mario}/>
            <Tienda props={commario}/>
        </div>
        <Whatsapp/>
        <Footer/>
      </div>
    );
}

export default Tiendas;