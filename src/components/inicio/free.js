import React from 'react';
import '../csscomponents/free.css';
import Section from '../global/section';
import Product from '../global/product';
import Todo from '../global/todo';

function Free() {
    const envios = {
        title: 'Envíos gratis en Amayuca'
    }
    const costilla = {
        img: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/c/o/costilla-de-cerdo-para-parrilla-1-kg392386_x1.jpg',
        product: 'Costilla de cerdo',
        price: '$100/kg', 
        store: 'Carnicería Doña Eva'
    }
    const lomo = {
        img: 'https://www.chedraui.com.mx/medias/2506708-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8Nzk1MTV8aW1hZ2UvanBlZ3xoZmIvaDI2Lzk4ODQ1NjAyMjgzODIuanBnfGIwNDY4NGM5MWVmODk5MDEwOTI5ZWQ5ODgxYTFkMmMzYzBmNDI0NTBkMTY1ZTA3ZWZmZWQyYjJlM2RiYzUzOGY',
        product: 'Lomo de cerdo',
        price: '$110/kg', 
        store: 'Carnicería Doña Eva'
    }
    const chuleta = {
        img: 'https://okdiario.com/img/recetas/2017/07/25/chuletas-de-cerdo-4.jpg',
        product: 'Chuleta de cerdo',
        price: '$100/kg', 
        store: 'Carnicería Doña Eva'
    }
    const pierna = {
        img: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/p/i/pierna-y-muslo-de-pollo-iqf-1-kg256228_x1.jpg',
        product: 'Pierna de pollo',
        price: '$20/pz', 
        store: 'Pollería Doña Eva'
    }
    const ala = {
        img: 'https://www.gastronomiavasca.net/uploads/image/file/4164/alas_de_pollo_1.jpg',
        product: 'Ala de pollo',
        price: '$17/pz', 
        store: 'Pollería Doña Eva'
    }
    const papas = {
        img: 'https://www.superama.com.mx/Content/images/products/img_large/0750101111561L.jpg',
        product: 'Papas sabritas',
        price: '$12/pz', 
        store: 'Abarrotes Eva'
    }
    const btn = {
        link: '/envios', 
        text: 'Ver todo'
    }

    return(
        <section className="container-free">
            <Section props={envios}/>
            <div className="division-free">
                <Product props={costilla}/>
                <Product props={lomo}/>
                <Product props={chuleta}/>
                <Product props={pierna}/>
                <Product props={ala}/>
                <Product props={papas}/>
            </div>
            <Todo props={btn}/>
        </section>
    );
}

export default Free;