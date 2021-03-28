import React from 'react';
import '../csscomponents/food.css';
import Section from '../global/section';
import Product from '../global/product';
import Todo from '../global/todo';

function Food() {
    const comida = {
        title: 'Comida'
    }
    const products = [
        {
            id: 1,
            img: 'https://laparadachilanga.com.mx/wp-content/uploads/2020/05/tacos2-1.jpg',
            product: 'Orden de tacos al pastor',
            price: 35, 
            store: 'Taquería Los güeros'
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-QpQ5ue0tK7SLMWu3XxRtSA8uiPzjTBkrA&usqp=CAU',
            product: 'Torta de milanesa',
            price: 20, 
            store: 'Doña Cata'
        },
        {
            id: 3,
            img: 'https://d1ralsognjng37.cloudfront.net/f5440cbc-4f35-4564-9d06-b3df98eaebfc.jpeg',
            product: 'Tacos de arroz',
            price: 16, 
            store: 'Doña Lucy'
        },
        {
            id: 4,
            img: 'https://pueblosmexico.com.mx/IMG/arton31814.jpg',
            product: 'Plato de cecina',
            price: 40, 
            store: 'Fonda Mario'
        },
        {
            id: 5,
            img: 'https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/10/hamburguesa.jpg',
            product: 'Hamburguesa con papas',
            price: 25, 
            store: 'Fonda Fernanda'
        },
        {
            id: 6,
            img: 'https://t2.rg.ltmcdn.com/es/images/2/0/9/img_milanesa_de_papas_32902_600.jpg',
            product: 'Plato de milanesa',
            price: 35, 
            store: 'Fonda Mario'
        }
    ]
    const btn = {
        link: '/comida', 
        text: 'Ver todo'
    }

  return(
    <section className="container-food">
        <Section props={comida}/>
        <div className="division-food">
            {products.map(product =>(
                <Product key={product.id} props={product}/>
            ))}
        </div>
        <Todo props={btn}/>
    </section>
  );
}

export default Food;