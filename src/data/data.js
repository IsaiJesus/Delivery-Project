const departments = [
    {
        id: 1,
        link: 'comida',
        img: '/images/comida-departamento.jpg',
        department: 'Comida'
    },
    {
        id: 2,
        link: 'carne-de-cerdo',
        img: '/images/cerdo-departamento.jpg',
        department: 'Carne de cerdo'
    },
    {
        id: 3,
        link: 'carne-de-pollo',
        img: '/images/pollo-departamento.jpg',
        department: 'Carne de pollo'
    }
];

const products = [
    {
        id: 1,
        link: 'carniceria-doña-eva-costilla-de-cerdo',
        img: '/images/costilla-c-cde.jpg',
        nameProduct: 'Costilla de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Costilla de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 2,
        link: 'carniceria-doña-eva-filete-de-cerdo',
        img: '/images/filete-c-cde.png',
        nameProduct: 'Filete de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Filete de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 3,
        link: 'carniceria-doña-eva-chuleta-de-cerdo',
        img: '/images/chuleta-f-c-cde.jpg',
        nameProduct: 'Chuleta fresca de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chuleta fresca de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 4,
        link: 'carniceria-doña-eva-chuleta-ahumada-de-cerdo',
        img: '/images/chuleta-a-c-cde.jpg',
        nameProduct: 'Chuleta ahumada de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chuleta de cerdo ahumada, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 5,
        link: 'carniceria-doña-eva-bistec-de-cerdo',
        img: '/images/bistec-c-cde.jpg',
        nameProduct: 'Bistec de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Bistec de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/2 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 6,
        link: 'carniceria-doña-eva-molida-de-cerdo',
        img: '/images/molida-c-cde.jpg',
        nameProduct: 'Molida de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Molida de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 7,
        link: 'carniceria-doña-eva-codillo-de-cerdo',
        img: '/images/codillo-c-cde.jpg',
        nameProduct: 'Codillo de cerdo',
        price: 90,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Codillo de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 8,
        link: 'carniceria-doña-eva-espinazo-de-cerdo',
        img: '/images/espinazo-g-c-cde.jpg',
        nameProduct: 'Espinazo de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Espinazo de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 9,
        link: 'carniceria-doña-eva-manitas-de-cerdo',
        img: '/images/manitas-c-cde.jpg',
        nameProduct: 'Manitas de cerdo',
        price: 60,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Manitas de cerdo, de la carnicería Doña Eva, puedes pedir una cantidad de piezas para después ser pesadas y sepas el precio, normalmente 3 piezas equivalen a 1 kilogramo.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 10,
        link: 'polleria-doña-eva-pechuga-de-pollo',
        img: '/images/pechuga-p-pde.jpg',
        nameProduct: 'Pechuga de pollo',
        price: 80,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pechuga de pollo, de la pollería Doña Eva, el precio de este puede variar por características como el tamaño, puedes pedir desde media pechuga hasta la cantidad que quieras, puedes pedirla con pellejo y/o hueso o sin pellejo y/o hueso.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 11,
        link: 'polleria-doña-eva-muslo-de-pollo',
        img: '/images/muslo-p-pde.jpg',
        nameProduct: 'Muslo de pollo',
        price: 12,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Muslo de pollo, de la pollería Doña Eva, puedes pedir desde mínimo 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 12,
        link: 'polleria-doña-eva-pollo-entero',
        img: '/images/pollo-e-pde.jpg',
        nameProduct: 'Pollo entero',
        price: 160,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pollo entero, de la pollería Doña Eva, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 13,
        link: 'carniceria-doña-eva-arrachera',
        img: '/images/arrachera-c-cde.jpg',
        nameProduct: 'Arrachera',
        price: 260,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Arrachera, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 14,
        link: 'carniceria-doña-eva-chistorra',
        img: '/images/chistorra-c-cde.jpg',
        nameProduct: 'Chistorra',
        price: 140,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chistorra, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 15,
        link: 'polleria-doña-eva-pierna-con-muslo-de-pollo',
        img: '/images/pierna-m-p-pde.jpg',
        nameProduct: 'Pierna con muslo de pollo',
        price: 22,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Pierna con muslo de pollo, de la pollería Doña Eva, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 16,
        link: 'polleria-doña-eva-molleja-de-pollo',
        img: '/images/molleja-p-pde.jpg',
        nameProduct: 'Molleja de pollo',
        price: 3,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Molleja de pollo, de la pollería Doña Eva, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 17,
        link: 'polleria-doña-eva-rabadilla-de-pollo',
        img: '/images/rabadilla-p-pde.jpg',
        nameProduct: 'Rabadilla de pollo',
        price: 5,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'rabadilla de pollo, de la pollería Doña Eva, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 18,
        link: 'carniceria-doña-eva-azadura',
        img: '/images/azadura-c-cde.jpg',
        nameProduct: 'Azadura',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Azadura (carnitas), de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 19,
        link: 'carniceria-doña-eva-tocino',
        img: '/images/tocino-c-cde.jpg',
        nameProduct: 'Tocino',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Tocino, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 20,
        link: 'carniceria-doña-eva-enchilada-de-cerdo',
        img: '/images/enchilada-c-cde.png',
        nameProduct: 'Enchilada de cerdo',
        price: 140,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Enchilada de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 21,
        link: 'carniceria-doña-eva-maciza-de-cerdo',
        img: '/images/pierna-s-h-c-cde.jpg',
        nameProduct: 'Maciza de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Maciza de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 22,
        link: 'polleria-doña-eva-mole-rojo',
        img: '/images/mole-r-pde.jpg',
        nameProduct: 'Mole rojo',
        price: 150,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Mole rojo, de la pollería Doña Eva, 1/4 kg $40, 1/2 kg $80. Puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 23,
        link: 'polleria-doña-eva-mole-poblano',
        img: '/images/mole-po-pde.jpg',
        nameProduct: 'Mole poblano',
        price: 160,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Mole poblano, de la pollería Doña Eva, 1/4 kg $40, 1/2 kg $80. Puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 24,
        link: 'polleria-doña-eva-mole-pipian',
        img: '/images/mole-p-pde.png',
        nameProduct: 'Mole pipián',
        price: 160,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Mole pipián, de la pollería Doña Eva, 1/4kg $40, 1kg $80. Puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 25,
        link: 'carniceria-doña-eva-manteca-de-cerdo',
        img: '/images/manteca-c-cde.jpg',
        nameProduct: 'Manteca de cerdo',
        price: 30,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Manteca de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 26,
        link: 'carniceria-doña-eva-pierna-española',
        img: '/images/pierna-e-cde.jpg',
        nameProduct: 'Pierna española',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Pierna española, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 27,
        link: 'carniceria-doña-eva-surtida-de-cerdo',
        img: '/images/surtida-c-cde.jpg',
        nameProduct: 'Surtida de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Surtida de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 28,
        link: 'polleria-doña-eva-patas-de-pollo',
        img: '/images/patas-p-pde.jpg',
        nameProduct: 'Patas de pollo',
        price: 2,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Patas de pollo, de la pollería Doña Eva, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 29,
        link: 'polleria-doña-eva-tira-de-pollo',
        img: '/images/tira-p-pde.jpg',
        nameProduct: 'Tira de pollo',
        price: 15,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Tira de pollo, de la pollería Doña Eva, incluye la cabeza, huacal y cola del pollo. Puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 30,
        link: 'carniceria-doña-eva-chicharron-de-cerdo',
        img: '/images/chicharron-c-cde.jpg',
        nameProduct: 'Chicharrón de cerdo',
        price: 160,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chicharrón de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 31,
        link: 'carniceria-doña-eva-longaniza-de-cerdo',
        img: '/images/longaniza-c-cde.jpg',
        nameProduct: 'Longaniza de cerdo',
        price: 140,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Longaniza de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 32,
        link: 'polleria-doña-eva-ala-de-pollo',
        img: '/images/ala-p-pde.jpg',
        nameProduct: 'Ala de pollo',
        price: 10,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Doña Eva',
        description: 'Ala de pollo, de la pollería Doña Eva, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-doña-eva'
    },
    {
        id: 33,
        link: 'carniceria-doña-eva-rellena-de-cerdo',
        img: '/images/rellena-c-cde.png',
        nameProduct: 'Rellena de cerdo',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Rellena de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 34,
        link: 'carniceria-doña-eva-chales-de-cerdo',
        img: '/images/chales-c-cde.jpg',
        nameProduct: 'Chales de cerdo',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Chales de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 35,
        link: 'carniceria-doña-eva-pierna-con-hueso-de-cerdo',
        img: '/images/pierna-h-c-cde.jpg',
        nameProduct: 'Pierna con hueso de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Pierna con hueso de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 36,
        link: 'carniceria-doña-eva-lomo-de-cerdo',
        img: '/images/lomo-c-cde.jpg',
        nameProduct: 'Lomo de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Doña Eva',
        description: 'Lomo de cerdo, de la carnicería Doña Eva, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria-doña-eva'
    },
    {
        id: 37,
        link: 'hot-dogs-resno-hamburguesa-con-tocino',
        img: '/images/hamburguesa-t-h-hdr.jpg',
        nameProduct: 'Hamburguesa con tocino',
        price: 35,
        unity: 'pza',
        quantity: 1,
        store: 'Hot dogs RESNO',
        description: 'Hamburguesa con tocino. Puede incluir: jitomate, cebolla, chiles, catsup, mostaza, tocino y/o lechuga.',
        category: 'comida',
        categoryStore: 'hot-dogs-resno'
    },
    {
        id: 38,
        link: 'hot-dogs-resno-hamburguesa-con-piña',
        img: '/images/hamburguesa-t-p-hdr.jpg',
        nameProduct: 'Hamburguesa con piña',
        price: 35,
        unity: 'pza',
        quantity: 1,
        store: 'Hot dogs RESNO',
        description: 'Hamburguesa con piña. Puede incluir: jitomate, cebolla, chiles, catsup, mostaza, piña y/o lechuga.',
        category: 'comida',
        categoryStore: 'hot-dogs-resno'
    },
    {
        id: 39,
        link: 'hot-dogs-resno-hot-dog-sencillo',
        img: '/images/hot-dog-s-h-hdr.jpg',
        nameProduct: 'Hot dog sencillo',
        price: 19,
        unity: 'pza',
        quantity: 1,
        store: 'Hot dogs RESNO',
        description: 'Hot dog sencillo. Puede incluir: jitomate, cebolla, chile, catsup y/o mostaza.',
        category: 'comida',
        categoryStore: 'hot-dogs-resno'
    },
    {
        id: 40,
        link: 'hot-dogs-resno-hot-dog-con-piña',
        img: '/images/hot-dog-c-p-h-hdr.jpg',
        nameProduct: 'Hot dog con piña',
        price: 23,
        unity: 'pza',
        quantity: 1,
        store: 'Hot dogs RESNO',
        description: 'Hot dog con piña. Puede incluir: jitomate, cebolla, chiles, catsup, mostaza y/o piña.',
        category: 'comida',
        categoryStore: 'hot-dogs-resno'
    }
];

const stores = [
    {
        id: 1,
        img: '/images/cde-tienda.jpg',
        store: 'Carnicería Doña Eva',
        link: 'carniceria-doña-eva',
        category: 'carne-de-cerdo'
    },
    {
        id: 2,
        img: '/images/pde-tienda.jpg',
        store: 'Pollería Doña Eva',
        link: 'polleria-doña-eva',
        category: 'carne-de-pollo'
    },
    {
        id: 3,
        img: '/images/hdr-tienda.jpg',
        store: 'Hot dogs RESNO',
        link: 'hot-dogs-resno',
        category: 'comida'
    }
];

const titles = [
    {
        id: 1,
        title: 'Departamentos'
    },
    {
        id: 2,
        title: 'Carrito'
    },
    {
        id: 3,
        title: 'Comida',
        category: 'comida'
    },
    {
        id: 4,
        title: 'Carne de cerdo',
        category: 'carne-de-cerdo'
    },
    {
        id: 5,
        title: 'Carne de pollo',
        category: 'carne-de-pollo'
    },
    {
        id: 6,
        title: 'Costo de envíos'
    },
    {
        id: 7,
        title: 'Tiendas'
    },
    {
        id: 8,
        title: 'Carnicería Doña Eva',
        category: 'carniceria-doña-eva'
    },
    {
        id: 9,
        title: 'Pollería Doña Eva',
        category: 'polleria-doña-eva'
    },
    {
        id: 10,
        title: 'Términos y condiciones'
    },
    {
        id: 11,
        title: 'Nosotros'
    },
    {
        id: 12,
        title: 'Preguntas frecuentes'
    },
    {
        id: 13,
        title: 'Hot dogs RESNO',
        category: 'hot-dogs-resno'
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
        minPrice: 5
    },
    {
        id: 2,
        place: 'Jantetelco',
        minPrice: 5
    },
    {
        id: 3,
        place: 'San Gabriel',
        minPrice: 15
    },
    {
        id: 4,
        place: 'Chalca',
        minPrice: 15
    },
    {
        id: 5,
        place: 'Jonacatepec',
        minPrice: 20
    },
    {
        id: 6,
        place: 'Atotonilco',
        minPrice: 30
    },
    {
        id: 7,
        place: 'Tepalcingo',
        minPrice: 40
    },
    {
        id: 8,
        place: 'Amilcingo',
        minPrice: 10
    },
    {
        id: 9,
        place: 'Temoac',
        minPrice: 20
    },
    {
        id: 10,
        place: 'Popotlán',
        minPrice: 25
    },
    {
        id: 11,
        place: 'Zacualpan',
        minPrice: 30 
    },
    {
        id: 12,
        place: 'Tlacotepec',
        minPrice: 35
    },
    {
        id: 13,
        place: 'Tlayca',
        minPrice: 20
    },
    {
        id: 14,
        place: 'Tlahuica',
        minPrice: 25
    },
    {
        id: 15,
        place: 'Tlayecac',
        minPrice: 40
    }
];

const information = [
    {
        id: 1,
        text: 'El precio del envío puede ser menor dependiendo de la ubicación entre el repartidor y el cliente, estos precios son tomando de referencia a Amayuca.'
    },
    {
        id: 2,
        text: '"Copiar contenido el carrito" copia tus productos y pégalos en nuestra conversación de WhatsApp.'
    },
    {
        id: 3,
        text: 'El precio del envío puede variar dependiendo de la dirección a la que se enviarán los productos.'
    },
    {
        id: 4,
        text: 'Este producto podría agotarse en un horario específico, puedes preguntar si aún está disponible en nuestras redes sociales.'
    },
    {
        id: 5,
        text: 'Al terminar de agregar todos los productos al carrito podrás ver el costo total de tus compras en la sección del carrito.'
    },
    {
        id: 6,
        text: 'Puedes hacer tu pedido llamando a 735 244 9749 o mandando un Whatsapp al mismo número.'
    },
    {
        id: 7,
        text: 'Si tienes alguna duda puedes preguntar mandando mensaje directo a nuestras redes sociales, o bien, ver la sección de "Preguntas frecuentes" que se encuentra en el footer.'
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

const ads = [
    {
        id: 1,
        slideNum: 'slide 1',
        link: '/tiendas/carniceria-doña-eva',
        img: '/images/banner_car_poll_d_eva.jpg',
        alt: 'Carnicería Doña Eva'
    }
];

export { products }
export { stores }
export { titles }
export { links }
export { places }
export { information }
export { filter }
export { ads }
export default departments;