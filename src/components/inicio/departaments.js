import React from 'react';
import '../csscomponents/departaments.css';
import Prodep from '../global/prodep';
import Section from '../global/section';
import Todo from '../global/todo';

function Departaments() {
    const cerdo = {
        img: 'http://www.alfa-editores.com.mx/wp-content/uploads/2020/12/CA%CC%81RNICOS.jpg',
        text: 'Carne de cerdo',
        link: '/departamentos/carne-de-cerdo'
    }
    const pollo = {
        img: 'https://www.aldelis.com/wp-content/uploads/2020/09/carne-de-pollo-Aldel%C3%ADs.jpg',
        text: 'Carne de pollo',
        link: '/departamentos/carne-de-cerdo'
    }
    const fruta = {
        img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/frutas-1552246920.jpg',
        text: 'Frutería',
        link: '/departamentos/carne-de-cerdo'
    }
    const pescado = {
        img: 'https://gourmetdemexico.com.mx/wp-content/uploads/2017/03/field_image_pescado-cuaresma.jpg',
        text: 'Pescado',
        link: '/departamentos/carne-de-cerdo'
    }
    const lacteos = {
        img: 'http://www.alfa-editores.com.mx/wp-content/uploads/2021/01/LA%CC%81CTEOS-El-consumo.jpg',
        text: 'Lácteos',
        link: '/departamentos/carne-de-cerdo'
    }
    const res = {
        img: 'https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/los-cortes-de-la-carne-de-res-y-para-que-sirve-cada-uno.jpg?itok=mZeISSJj',
        text: 'Carne de res',
        link: '/departamentos/carne-de-cerdo'
    }
    const comida = {
        text: "Comida",  
        img: "https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg",
        link: "/departamentos/carne-de-cerdo"
    }
    const helado = {
        text: "Congelados",  
        img: "https://heladitos.com/wp-content/uploads/2018/01/helado_extravagante.jpg",
        link: "/departamentos/carne-de-cerdo"
    }
    const departamentos = {
        title: 'Departamentos'
    }
    const btn = {
        link: '/departamentos',
        text: 'Ver todo'
    }

    return(
        <section className="container-departaments">
            <Section props={departamentos}/>
            <div className="division-departaments">
                <Prodep props={cerdo}/>
                <Prodep props={pollo}/>
                <Prodep props={fruta}/>
                <Prodep props={pescado}/>
                <Prodep props={lacteos}/>
                <Prodep props={res}/>
                <Prodep props={helado}/>
                <Prodep props={comida}/>
            </div>
            <Todo props={btn}/>
        </section>
    );
}

export default Departaments;