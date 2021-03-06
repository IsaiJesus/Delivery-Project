import React from 'react';
import '../csscomponents/food.css';
import Section from '../global/section';
import Product from '../global/product';
import Todo from '../global/todo';

function Food() {
    const comida = {
        title: 'Comida'
    }

    const tacos = {
        img: 'https://laparadachilanga.com.mx/wp-content/uploads/2020/05/tacos2-1.jpg',
        product: 'Orden de tacos al pastor',
        price: '$35/orden', 
        store: 'Taquería Los güeros'
    }
    const tortas = {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-QpQ5ue0tK7SLMWu3XxRtSA8uiPzjTBkrA&usqp=CAU',
        product: 'Torta de milanesa',
        price: '$20/pz', 
        store: 'Doña Cata'
    }
    const tacosa = {
        img: 'https://d1ralsognjng37.cloudfront.net/f5440cbc-4f35-4564-9d06-b3df98eaebfc.jpeg',
        product: 'Tacos de arroz',
        price: '$16/pz', 
        store: 'Doña Lucy'
    }
    const cecina = {
        img: 'https://pueblosmexico.com.mx/IMG/arton31814.jpg',
        product: 'Plato de cecina',
        price: '$40/kg', 
        store: 'Fonda Mario'
    }
    const hamburguesa = {
        img: 'https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/10/hamburguesa.jpg',
        product: 'Hamburguesa con papas',
        price: '$25/pz', 
        store: 'Fonda Fernanda'
    }
    const milanesa = {
        img: 'https://t2.rg.ltmcdn.com/es/images/2/0/9/img_milanesa_de_papas_32902_600.jpg',
        product: 'Plato de milanesa',
        price: '$35/pz', 
        store: 'Fonda Mario'
    }
    const btn = {
        link: '/comida', 
        text: 'Ver todo'
    }

  return(
    <section className="container-food">
        <Section props={comida}/>
        <div className="division-food">
            <Product props={tacos}/>
            <Product props={tortas}/>
            <Product props={tacosa}/>
            <Product props={cecina}/>
            <Product props={hamburguesa}/>
            <Product props={milanesa}/>
        </div>
        <Todo props={btn}/>
    </section>
  );
}

export default Food;