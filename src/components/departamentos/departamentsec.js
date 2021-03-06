import React from 'react';
import '../csscomponents/departaments.css';
import Prodep from '../global/prodep';
import Section from '../global/section';

function Departamentsec() {
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
    const bebidas = {
        img: 'http://www.neolifeclinic.com/blog/wp-content/uploads/2015/12/Evitar-bebidas-azucaradas1.jpeg',
        text: 'Bebidas',
        link: '/departamentos/carne-de-cerdo'
    }
    const tortas = {
        img: 'https://cdn.kiwilimon.com/recetaimagen/35450/th5-640x426-42522.jpg',
        text: 'Tortas',
        link: '/departamentos/carne-de-cerdo'
    }
    const tacos = {
        img: 'https://www.pequerecetas.com/wp-content/uploads/2020/10/tacos-mexicanos.jpg',
        text: 'Tacos',
        link: '/departamentos/carne-de-cerdo'
    }
    const departamentos = {
        title: 'Departamentos'
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
                <Prodep props={bebidas}/>
                <Prodep props={tortas}/>
                <Prodep props={tacos}/>
            </div>
        </section>
    );
}

export default Departamentsec;