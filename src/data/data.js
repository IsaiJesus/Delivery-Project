const departments = [
    {
        id: 1,
        link: 'comida',
        img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg',
        departamento: 'Comida'
    },
    {
        id: 2,
        link: 'carne-de-cerdo',
        img: 'http://www.alfa-editores.com.mx/wp-content/uploads/2020/12/CA%CC%81RNICOS.jpg',
        departamento: 'Carne de cerdo'
    },
    {
        id: 3,
        link: 'carne-de-pollo',
        img: 'https://www.aldelis.com/wp-content/uploads/2020/09/carne-de-pollo-Aldel%C3%ADs.jpg',
        departamento: 'Carne de pollo'
    }
];

const products = [
    {
        id: 1,
        link: 'carniceria-doña-eva-costilla-de-cerdo',
        img: 'https://www.heb.com.mx/media/catalog/product/cache/9f5ec31302878493d9ed0ac40a398e12/c/o/costilla-de-cerdo-para-parrilla-1-kg392386_x1.jpg',
        product: 'Costilla de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Costilla de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 2,
        link: 'carniceria-doña-eva-lomo-de-cerdo',
        img: 'https://www.chedraui.com.mx/medias/2506708-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8Nzk1MTV8aW1hZ2UvanBlZ3xoZmIvaDI2Lzk4ODQ1NjAyMjgzODIuanBnfGIwNDY4NGM5MWVmODk5MDEwOTI5ZWQ5ODgxYTFkMmMzYzBmNDI0NTBkMTY1ZTA3ZWZmZWQyYjJlM2RiYzUzOGY',
        product: 'Lomo de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Lomo de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $120. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 3,
        link: 'carniceria-doña-eva-chuleta-de-cerdo',
        img: 'https://okdiario.com/img/recetas/2017/07/25/chuletas-de-cerdo-4.jpg',
        product: 'Chuleta fresca de cerdo',
        price: 90,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chuleta fresca de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 4,
        link: 'carniceria-doña-eva-chuleta-ahumada-de-cerdo',
        img: 'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/11/06194357/RFB-0411-3-chuletaahumada.jpg',
        product: 'Chuleta ahumada de cerdo',
        price: 90,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chuleta de cerdo ahumada, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 5,
        link: 'carniceria-doña-eva-bistec-de-cerdo',
        img: 'http://cdn.kometia-static.com/despensa-facil/images/bisteccerdo-1.jpg',
        product: 'Bistec de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Bistec de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 6,
        link: 'carniceria-doña-eva-molida-de-cerdo',
        img: 'http://guadaproducts.com/255-large_default/carne-molida-de-cerdo-kilo.jpg',
        product: 'Molida de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Molida de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 7,
        link: 'carniceria-doña-eva-codillo-de-cerdo',
        img: 'https://www.superama.com.mx/Content/images/products/img_large/0020100500000L1.jpg',
        product: 'Codillo de cerdo',
        price: 60,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Codillo de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 8,
        link: 'carniceria-doña-eva-espinazo-de-cerdo',
        img: 'https://cdn.shopify.com/s/files/1/0028/7444/1793/products/da71f47124909be6fad5b554e8c41462_2048x2048.jpg?v=1601409054',
        product: 'Espinazo de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Espinazo de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 9,
        link: 'carniceria-doña-eva-manitas-de-cerdo',
        img: 'https://www.chedraui.com.mx/medias/2502598-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MzE4NzB8aW1hZ2UvanBlZ3xoNjcvaDk1Lzk4ODQ1MzYzNDA1MTAuanBnfGE3YWJiODY5NDdiNjc1YTMzMmU4N2ZlZjFlN2FlYTA2YTFjZmM4ZTBmNzE3MWIyNDhkZjA3Yjg1ZTU1MGNhYzM',
        product: 'Manitas de cerdo',
        price: 50,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Manitas de cerdo, de la carnicería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 10,
        link: 'polleria-doña-eva-pechuga-de-pollo',
        img: 'https://www.superama.com.mx/Content/images/products/img_large/0020104000000L2.jpg',
        product: 'Pechuga de pollo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pechuga de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 11,
        link: 'polleria-doña-eva-muslo-de-pollo',
        img: 'https://cdn.shopify.com/s/files/1/0021/9290/0156/products/Muslo_de_pollo_1024x.png?v=1569183384',
        product: 'Muslo de pollo',
        price: 75,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Muslo de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 12,
        link: 'polleria-doña-eva-pollo-entero',
        img: 'https://s.cornershopapp.com/product-images/1142356.jpg?versionId=HfbJEhO8Z7MkU8Yi9xpaOjoOu9he.xve',
        product: 'Pollo entero',
        price: 200,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pollo entero, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 13,
        link: 'polleria-doña-eva-pierna-de-pollo',
        img: 'https://www.granodeoro.com.mx/wp-content/uploads/2020/03/Pierna-pollo.jpg',
        product: 'Pierna de pollo',
        price: 60,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pierna de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 14,
        link: 'polleria-doña-eva-molida-de-pollo',
        img: 'https://s.cornershopapp.com/product-images/919479.png?versionId=XXN9K3qZIPQOvR9CRnZEAhp1RQtRSSCf',
        product: 'Molida de pollo',
        price: 130,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Molida de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 15,
        link: 'polleria-doña-eva-pierna-con-muslo-de-pollo',
        img: 'https://www.superama.com.mx/Content/images/products/img_large/0020104300000L2.jpg',
        product: 'Pierna con muslo de pollo',
        price: 65,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pierna con muslo de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 16,
        link: 'polleria-doña-eva-molleja-de-pollo',
        img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/11/mollejas.jpg',
        product: 'Molleja de pollo',
        price: 30,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Molleja de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 17,
        link: 'polleria-doña-eva-cola-de-pollo',
        img: 'https://www.lacomer.com.mx/superc/img_art/2611015000008_3.jpg',
        product: 'Cola de pollo',
        price: 20,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Cola de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 18,
        link: 'hamburguesas-doña-evo-hamburguesa',
        img: 'https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/10/hamburguesa.jpg',
        product: 'Hamburguesa',
        price: 25,
        unity: 'pza',
        quantity: 1,
        store: 'Hamburguesas Doña Evo',
        description: 'Hamburguesa con papas, con carne de cerdo, jitomate, lechuga, queso y mayonesa.',
        category: 'comida',
        categoryStore: 'hamburguesas-doña-evo'
    },
    {
        id: 19,
        link: 'hamburguesas-doña-evo-hot-dog',
        img: 'https://images-gmi-pmc.edge-generalmills.com/03dba6be-540b-41f6-adea-8be7ab899ef8.jpg',
        product: 'Hot dog',
        price: 20,
        unity: 'pza',
        quantity: 1,
        store: 'Hamburguesas Doña Evo',
        description: 'Hot dog con papas, con salchicha de cerdo, jitomate, cebolla y mayonesa.',
        category: 'comida',
        categoryStore: 'hamburguesas-doña-evo'
    }
];

const tiendas = [
    {
        id: 1,
        color: '#8338EC',
        text: 'Carnicería Doña Eva',
        link: 'carniceria-doña-eva',
        category: 'carne-de-cerdo'
    },
    {
        id: 2,
        color: '#3A86FF',
        text: 'Hamburguesas Doña Evo',
        link: 'hamburguesas-doña-evo',
        category: 'comida'
    },
    {
        id: 3,
        color: '#00BBF9',
        text: 'Pollería Doña Eva',
        link: 'polleria-doña-eva',
        category: 'carne-de-pollo'
    }
];

const titles = [
    {
        id: 1,
        title: 'Departamentos',
        category: '/departamentos'
    },
    {
        id: 2,
        title: 'Carrito',
        category: '/carrito'
    },
    {
        id: 2,
        title: 'Comida',
        category: 'comida'
    },
    {
        id: 3,
        title: 'Carne de cerdo',
        category: 'carne-de-cerdo'
    },
    {
        id: 4,
        title: 'Carne de pollo',
        category: 'carne-de-pollo'
    },
    {
        id: 5,
        title: 'Costo de envíos',
        category: '/envios'
    },
    {
        id: 6,
        title: 'Tiendas',
        category: '/tiendas'
    },
    {
        id: 7,
        title: 'Carnicería Doña Eva',
        category: 'carniceria-doña-eva'
    },
    {
        id: 8,
        title: 'Hamburguesas Doña Evo',
        category: 'hamburguesas-doña-evo'
    },
    {
        id: 9,
        title: 'Pollería Doña Eva',
        category: 'polleria-doña-eva'
    },
    {
        id: 10,
        title: 'Resultados de la busqueda:',
        category: '/busqueda'
    }
];

const links = [
    {
        id: 1,
        link: '/',
        text: 'Ver productos'
    },
    {
        id: 2,
        link: '/departamentos',
        text: 'Ver todo'
    },
    {
        id: 3,
        link: '/departamentos/comida',
        text: 'Ver todo'
    },
    {
        id: 4,
        link: '/tiendas',
        text: 'Ver todo'
    }
];

const places = [
    {
        id: 1,
        place: 'Amayuca',
        minprice: 5,
        maxprice: 10 
    },
    {
        id: 2,
        place: 'Jantetelco',
        minprice: 5,
        maxprice: 10 
    },
    {
        id: 3,
        place: 'San Gabriel',
        minprice: 15,
        maxprice: 15 
    },
    {
        id: 4,
        place: 'Chalca',
        minprice: 15,
        maxprice: 20 
    },
    {
        id: 5,
        place: 'Jonacatepec',
        minprice: 20,
        maxprice: 25 
    },
    {
        id: 6,
        place: 'Atotonilco',
        minprice: 30,
        maxprice: 35 
    },
    {
        id: 7,
        place: 'Tepalcingo',
        minprice: 40,
        maxprice: 55 
    },
    {
        id: 8,
        place: 'Amilcingo',
        minprice: 10,
        maxprice: 15 
    },
    {
        id: 9,
        place: 'Temoac',
        minprice: 20,
        maxprice: 25 
    },
    {
        id: 10,
        place: 'Popotlán',
        minprice: 25,
        maxprice: 25 
    },
    {
        id: 11,
        place: 'Zacualpan',
        minprice: 30,
        maxprice: 30 
    },
    {
        id: 12,
        place: 'Tlacotepec',
        minprice: 35,
        maxprice: 40 
    },
    {
        id: 13,
        place: 'Tlayca',
        minprice: 20,
        maxprice: 20 
    },
    {
        id: 14,
        place: 'Tlahuica',
        minprice: 25,
        maxprice: 30 
    },
    {
        id: 15,
        place: 'Tlayecac',
        minprice: 40,
        maxprice: 40 
    }
];

const information = [
    {
        id: 1,
        text: 'El precio del envío puede ser menor dependiendo de la cantidad de productos comprados.'
    },
    {
        id: 2,
        text: 'El precio del envío puede variar dependiendo de la dirección a la que se enviarán los productos.'
    },
    {
        id: 3,
        text: 'Este producto se agota muy rápido, puedes preguntar si aún está disponible llamando al 7351234567 o mandando un mensaje al Whatsapp.'
    },
    {
        id: 4,
        text: 'Al terminar de agregar todos los productos al carrito podrás ver el costo total de tus compras en la sección del carrito.'
    },
    {
        id: 5,
        text: 'El precio puede ser mayor si la distancia del envío es más lejana.'
    },
    {
        id: 6,
        text: 'Puedes hacer tu pedido llamando a 7351234567 o mandándo un Whatsapp al mismo número.'
    },
    {
        id: 7,
        text: 'Puedes hacer tu pedido presionando el botón de Whatsapp que está en la parte inferior derecha.'
    },
    {
        id: 8,
        text: 'Si tienes alguna duda puedes preguntar al chatbot, mándando un mensaje directo a nuestras redes sociales, o bien, ver la sección de "Preguntas frecuentes" que se encuentra en el footer.'
    },
    {
        id: 9,
        text: 'Este producto se agota muy rápido, puedes preguntar si aún está disponible llamando al 7351234567 o mandando un mensaje al Whatsapp.'
    }
]

const filter = [
    {
        id: 0,
        text: 'Todo',
        category: 'all'
    },
    {
        id: 1,
        text: 'Carne de cerdo',
        category: 'carne-de-cerdo'
    },
    {
        id: 2,
        text: 'Carne de pollo',
        category: 'carne-de-pollo'
    },
    {
        id: 3,
        text: 'Comida',
        category: 'comida'
    }
];

export { products }
export { tiendas }
export { titles }
export { links }
export { places }
export { information }
export { filter }
export default departments;