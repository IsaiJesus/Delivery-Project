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
    },
    {
        id: 4,
        link: 'abarrotes',
        img: '/images/abarrotes-departamento.jpg',
        department: 'Abarrotes'
    }
];

const products = [
    {
        id: 1,
        link: 'carniceria-costilla-de-cerdo',
        img: '/images/costilla-c-cde.jpg',
        nameProduct: 'Costilla de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Costilla de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 2,
        link: 'carniceria-filete-de-cerdo',
        img: '/images/filete-c-cde.png',
        nameProduct: 'Filete de cerdo',
        price: 110,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Filete de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 3,
        link: 'carniceria-chuleta-de-cerdo',
        img: '/images/chuleta-f-c-cde.jpg',
        nameProduct: 'Chuleta fresca de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Chuleta fresca de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 4,
        link: 'carniceria-chuleta-ahumada-de-cerdo',
        img: '/images/chuleta-a-c-cde.jpg',
        nameProduct: 'Chuleta ahumada de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Chuleta de cerdo ahumada, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 5,
        link: 'carniceria-bistec-de-cerdo',
        img: '/images/bistec-c-cde.jpg',
        nameProduct: 'Bistec de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Bistec de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/2 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 6,
        link: 'carniceria-molida-de-cerdo',
        img: '/images/molida-c-cde.jpg',
        nameProduct: 'Molida de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Molida de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 7,
        link: 'carniceria-codillo-de-cerdo',
        img: '/images/codillo-c-cde.jpg',
        nameProduct: 'Codillo de cerdo',
        price: 90,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Codillo de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 8,
        link: 'carniceria-espinazo-de-cerdo',
        img: '/images/espinazo-g-c-cde.jpg',
        nameProduct: 'Espinazo de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Espinazo de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 9,
        link: 'carniceria-manitas-de-cerdo',
        img: '/images/manitas-c-cde.jpg',
        nameProduct: 'Manitas de cerdo',
        price: 60,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Manitas de cerdo, de la Carnicería Don Julio, puedes pedir una cantidad de piezas para después ser pesadas y sepas el precio, normalmente 3 piezas equivalen a 1 kilogramo.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 10,
        link: 'polleria-don-julio-pechuga-de-pollo',
        img: '/images/pechuga-p-pde.jpg',
        nameProduct: 'Pechuga de pollo',
        price: 85,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Pechuga de pollo, de la Pollería Don Julio, el precio de este puede variar por características como el tamaño, puedes pedir desde media pechuga hasta la cantidad que quieras, puedes pedirla con pellejo y/o hueso o sin pellejo y/o hueso.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 11,
        link: 'polleria-don-julio-muslo-de-pollo',
        img: '/images/muslo-p-pde.jpg',
        nameProduct: 'Muslo de pollo',
        price: 12,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Muslo de pollo, de la Pollería Don Julio, puedes pedir desde mínimo 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 12,
        link: 'polleria-don-julio-pollo-entero',
        img: '/images/pollo-e-pde.jpg',
        nameProduct: 'Pollo entero',
        price: 165,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Pollo entero, de la Pollería Don Julio, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 13,
        link: 'carniceria-arrachera',
        img: '/images/arrachera-c-cde.jpg',
        nameProduct: 'Arrachera',
        price: 260,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Arrachera, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 14,
        link: 'carniceria-chistorra',
        img: '/images/chistorra-c-cde.jpg',
        nameProduct: 'Chistorra',
        price: 140,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Chistorra, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 15,
        link: 'polleria-don-julio-pierna-con-muslo-de-pollo',
        img: '/images/pierna-m-p-pde.jpg',
        nameProduct: 'Pierna con muslo de pollo',
        price: 22,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Pierna con muslo de pollo, de la Pollería Don Julio, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 16,
        link: 'polleria-don-julio-molleja-de-pollo',
        img: '/images/molleja-p-pde.jpg',
        nameProduct: 'Molleja de pollo',
        price: 3,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Molleja de pollo, de la Pollería Don Julio, 1/2kg $55, 1kg $110. Puedes pedir desde 1/4kg hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 17,
        link: 'polleria-don-julio-rabadilla-de-pollo',
        img: '/images/rabadilla-p-pde.jpg',
        nameProduct: 'Rabadilla de pollo',
        price: 5,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'rabadilla de pollo, de la Pollería Don Julio, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 18,
        link: 'carniceria-azadura',
        img: '/images/azadura-c-cde.jpg',
        nameProduct: 'Azadura',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Azadura (carnitas), de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 19,
        link: 'carniceria-tocino',
        img: '/images/tocino-c-cde.jpg',
        nameProduct: 'Tocino',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Tocino, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 20,
        link: 'carniceria-enchilada-de-cerdo',
        img: '/images/enchilada-c-cde.png',
        nameProduct: 'Enchilada de cerdo',
        price: 140,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Enchilada de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 21,
        link: 'carniceria-maciza-de-cerdo',
        img: '/images/pierna-s-h-c-cde.jpg',
        nameProduct: 'Maciza de cerdo',
        price: 120,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Maciza de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 22,
        link: 'polleria-don-julio-mole-rojo',
        img: '/images/mole-r-pde.jpg',
        nameProduct: 'Mole rojo',
        price: 150,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Mole rojo, de la Pollería Don Julio, 1/4 kg $40, 1/2 kg $80. Puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 23,
        link: 'polleria-don-julio-mole-poblano',
        img: '/images/mole-po-pde.jpg',
        nameProduct: 'Mole poblano',
        price: 160,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Mole poblano, de la Pollería Don Julio, 1/4 kg $40, 1/2 kg $80. Puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 24,
        link: 'polleria-don-julio-mole-pipian',
        img: '/images/mole-p-pde.png',
        nameProduct: 'Mole pipián',
        price: 160,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Mole pipián, de la Pollería Don Julio, 1/4kg $40, 1kg $80. Puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 25,
        link: 'carniceria-manteca-de-cerdo',
        img: '/images/manteca-c-cde.jpg',
        nameProduct: 'Manteca de cerdo',
        price: 32,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Manteca de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 26,
        link: 'carniceria-pierna-española',
        img: '/images/pierna-e-cde.jpg',
        nameProduct: 'Pierna española',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Pierna española, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 27,
        link: 'carniceria-surtida-de-cerdo',
        img: '/images/surtida-c-cde.jpg',
        nameProduct: 'Surtida de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Surtida de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 28,
        link: 'polleria-don-julio-patas-de-pollo',
        img: '/images/patas-p-pde.jpg',
        nameProduct: 'Patas de pollo',
        price: 2,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Patas de pollo, de la Pollería Don Julio, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 29,
        link: 'polleria-don-julio-tira-de-pollo',
        img: '/images/tira-p-pde.jpg',
        nameProduct: 'Tira de pollo',
        price: 15,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Tira de pollo, de la Pollería Don Julio, incluye la cabeza, huacal y cola del pollo. Puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 30,
        link: 'carniceria-chicharron-de-cerdo',
        img: '/images/chicharron-c-cde.jpg',
        nameProduct: 'Chicharrón de cerdo',
        price: 200,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Chicharrón de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 31,
        link: 'carniceria-longaniza-de-cerdo',
        img: '/images/longaniza-c-cde.jpg',
        nameProduct: 'Longaniza de cerdo',
        price: 140,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Longaniza de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 32,
        link: 'polleria-don-julio-ala-de-pollo',
        img: '/images/ala-p-pde.jpg',
        nameProduct: 'Ala de pollo',
        price: 10,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería Don Julio',
        description: 'Ala de pollo, de la Pollería Don Julio, puedes pedir desde 1 pieza hasta las piezas que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-don-julio'
    },
    {
        id: 33,
        link: 'carniceria-rellena-de-cerdo',
        img: '/images/rellena-c-cde.png',
        nameProduct: 'Rellena de cerdo',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Rellena de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 34,
        link: 'carniceria-chales-de-cerdo',
        img: '/images/chales-c-cde.jpg',
        nameProduct: 'Chales de cerdo',
        price: 80,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Chales de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 35,
        link: 'carniceria-pierna-con-hueso-de-cerdo',
        img: '/images/pierna-h-c-cde.jpg',
        nameProduct: 'Pierna con hueso de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Pierna con hueso de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
    },
    {
        id: 36,
        link: 'carniceria-lomo-de-cerdo',
        img: '/images/lomo-c-cde.jpg',
        nameProduct: 'Lomo de cerdo',
        price: 100,
        unity: 'kg',
        quantity: 1,
        store: 'Carnicería Don Julio',
        description: 'Lomo de cerdo, de la Carnicería Don Julio, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'carne-de-cerdo',
        categoryStore: 'carniceria'
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
    },
    {
        id: 41,
        link: 'polleria-y-abarroteria-azucar-morena',
        img: '/images/azucar-m-pyae.jpg',
        nameProduct: 'Azúcar morena',
        price: 20,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Azúcar morena, de la Pollería y abarrotería, puedes pedir desde mínimo 1 kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 42,
        link: 'polleria-y-abarroteria-huevo',
        img: '/images/huevo-pyae.jpg',
        nameProduct: 'Huevo',
        price: 32,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Huevo, de la Pollería y abarrotería, puedes pedir desde mínimo 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 43,
        link: 'polleria-y-abarroteria-patas-de-pollo',
        img: '/images/patas-p-pyae.jpg',
        nameProduct: 'Patas de pollo',
        price: 2.5,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Patas de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 44,
        link: 'polleria-y-abarroteria-pechuga-de-pollo',
        img: '/images/pechuga-p-pyae.jpg',
        nameProduct: 'Pechuga de pollo',
        price: 85,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Pechuga de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 45,
        link: 'polleria-y-abarroteria-ala-de-pollo',
        img: '/images/ala-p-pyae.jpg',
        nameProduct: 'Ala de pollo',
        price: 10,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Ala de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 46,
        link: 'polleria-y-abarroteria-pierna-con-muslo-de-pollo',
        img: '/images/pierna-m-p-pyae.jpg',
        nameProduct: 'Pierna con muslo de pollo',
        price: 22,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Pierna con muslo de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras. Muslo de pollo solo a $12.00/pza y pierna de pollo sola a $11.00/pza.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 47,
        link: 'polleria-y-abarroteria-rabadilla-de-pollo',
        img: '/images/rabadilla-p-pyae.jpg',
        nameProduct: 'rabadilla de pollo',
        price: 6,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Rabadilla de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 48,
        link: 'polleria-y-abarroteria-huacal-con-cabeza-de-pollo',
        img: '/images/huacal-c-p-pyae.jpg',
        nameProduct: 'Huacal con cabeza de pollo',
        price: 12,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Huacal con cabeza de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras. Huacal solo de pollo a $10.00/pza.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 49,
        link: 'polleria-y-abarroteria-chiles-en-lata',
        img: '/images/chiles-l-pyae.jpg',
        nameProduct: 'Chiles en lata',
        price: 32,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Chiles jalapeños en lata grande $63.00/pza, chiles jalapeños en lata mediana $32.00/pza, chiles jalapeños en lata chica $12.00/pza, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 50,
        link: 'polleria-y-abarroteria-sal-con-ajo',
        img: '/images/sal-a-pyae.jpg',
        nameProduct: 'Sal con ajo',
        price: 20,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Sal con ajo 125 gramos, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 51,
        link: 'polleria-y-abarroteria-sal',
        img: '/images/sal-pyae.jpg',
        nameProduct: 'Sal',
        price: 13,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Sal, de la Pollería y abarrotería, puedes pedir desde 1kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 52,
        link: 'polleria-y-abarroteria-arroz-blanco',
        img: '/images/arroz-b-pyae.jpg',
        nameProduct: 'Arroz blanco',
        price: 20,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Arroz blanco, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 53,
        link: 'polleria-y-abarroteria-cerillos',
        img: '/images/cerillos-pyae.jpg',
        nameProduct: 'Cerillos',
        price: 6,
        unity: 'caja',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Cerillos, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras. Paquete de 5 cajas de cerillos a $27.00.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 54,
        link: 'polleria-y-abarroteria-molleja-de-pollo',
        img: '/images/molleja-p-pyae.jpg',
        nameProduct: 'Molleja de pollo',
        price: 3,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Molleja de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 55,
        link: 'polleria-y-abarroteria-pechuga-en-bistec-de-pollo',
        img: '/images/pechuga-b-p-pyae.jpg',
        nameProduct: 'Pechuga en bistec de pollo',
        price: 85,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Pechuga en bistec de pollo, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'carne-de-pollo',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 56,
        link: 'polleria-y-abarroteria-atun',
        img: '/images/atun-pyae.jpg',
        nameProduct: 'Atún',
        price: 20,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Atún 133 gramos, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 57,
        link: 'polleria-y-abarroteria-pastas',
        img: '/images/pasta-pyae.jpg',
        nameProduct: 'Pastas',
        price: 8,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Pastas, sopa de letras y spaghetti 200 gramos de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 58,
        link: 'polleria-y-abarroteria-mayonesa',
        img: '/images/mayonesa-pyae.jpg',
        nameProduct: 'Mayonesa',
        price: 33,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Mayonesa chica $20.00/pza, mayonesa mediana $33.00/pza, mayonesa grande $195.00/pza, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 59,
        link: 'polleria-y-abarroteria-granos-de-elote',
        img: '/images/granos-e-pyae.jpg',
        nameProduct: 'Granos de elote',
        price: 17,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Granos de elote, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 60,
        link: 'polleria-y-abarroteria-pan-molido',
        img: '/images/pan-molido-pyae.jpg',
        nameProduct: 'Pan molido',
        price: 18,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Pan molido, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 61,
        link: 'polleria-y-abarroteria-veladoras',
        img: '/images/veladoras-pyae.jpg',
        nameProduct: 'Veladoras',
        price: 20,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Veladora de vaso $20.00/pza, veladora de papel $12.00/pza, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 62,
        link: 'polleria-y-abarroteria-aceites',
        img: '/images/aceites-pyae.jpg',
        nameProduct: 'Aceites comestibles',
        price: 36,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Aceites comestibles, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 63,
        link: 'polleria-y-abarroteria-jabones-en-polvo',
        img: '/images/jabon-p-pyae.jpg',
        nameProduct: 'Jabones en polvo',
        price: 17,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Jabones en polvo, jabón en polvo Roma $9.00/250g, jabón en polvo Blanca Nieves $17.00/500g, jabón en polvo Roma $35/kg de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 64,
        link: 'polleria-y-abarroteria-salsas',
        img: '/images/salsas-pyae.jpg',
        nameProduct: 'Salsas',
        price: 14,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Salsa Valentina $12.00/pza, salsa Búfalo $20.00/pza, salsa catsup Del monte $14.00/pza, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 65,
        link: 'polleria-y-abarroteria-chiles-secos',
        img: '/images/chiles-pyae.jpg',
        nameProduct: 'Chiles secos',
        price: 130,
        unity: 'kg',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Chiles secos, chile guajillo $130.00/kg, chile pasilla $150.00/kg, chile morita $120.00/kg, chile ancho $160.00/kg, chile puya $120/kg, de la Pollería y abarrotería, puedes pedir desde 1/4 kg hasta los kilogramos que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 66,
        link: 'polleria-y-abarroteria-leches',
        img: '/images/leches-pyae.jpg',
        nameProduct: 'Leche',
        price: 21,
        unity: 'L',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Leches, leche Sabrolé $11.00/900/ml, leche Nutri $16.00/L, leche Alpura $21.00/L, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 67,
        link: 'polleria-y-abarroteria-cloros-y-multiusos',
        img: '/images/cloros-pyae.jpg',
        nameProduct: 'Cloro y multiusos',
        price: 27,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Cloro y limpiadores multiusos, cloro Cloralex $13.00/pza, limpiador líquido Fabuloso $27.00/pza, blanqueador Valenciana $10.00/pza, suavizante Downy $27.00/pza, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    },
    {
        id: 68,
        link: 'polleria-y-abarroteria-jabones-en-barra',
        img: '/images/jabones-b-pyae.jpg',
        nameProduct: 'Jabones en barra',
        price: 17,
        unity: 'pza',
        quantity: 1,
        store: 'Pollería y abarrotería',
        description: 'Jabones en barra, jabón Zote $17.00/pza, jabón Palmolive $14.00/pza, jabón Zest $15.00/pza, de la Pollería y abarrotería, puedes pedir desde 1 pieza hasta lo que tu quieras.',
        category: 'abarrotes',
        categoryStore: 'polleria-y-abarroteria'
    }
];

const stores = [
    {
        id: 1,
        img: '/images/cde-tienda.jpg',
        store: 'Carnicería Don Julio',
        link: 'carniceria'
    },
    {
        id: 2,
        img: '/images/pde-tienda.jpg',
        store: 'Pollería Don Julio',
        link: 'polleria-don-julio',
        category: 'carne-de-pollo'
    },
    {
        id: 3,
        img: '/images/hdr-tienda.jpg',
        store: 'Hot dogs RESNO',
        link: 'hot-dogs-resno'
    },
    {
        id: 4,
        img: '/images/pyae-tienda.jpg',
        store: 'Pollería y abarrotería',
        link: 'polleria-y-abarroteria'
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
        title: 'Envíos'
    },
    {
        id: 7,
        title: 'Tiendas'
    },
    {
        id: 8,
        title: 'Carnicería Don Julio',
        category: 'carniceria'
    },
    {
        id: 9,
        title: 'Pollería Don Julio',
        category: 'polleria-don-julio'
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
    },
    {
        id: 14,
        title: 'Abarrotes',
        category: 'abarrotes'
    },
    {
        id: 15,
        title: 'Pollería y abarrotería',
        category: 'polleria-y-abarroteria'   
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
        place: 'Amayuca'
    },
    {
        id: 2,
        place: 'Jantetelco'
    },
    {
        id: 3,
        place: 'San Gabriel'
    },
    {
        id: 4,
        place: 'Chalcatzingo'
    },
    {
        id: 5,
        place: 'Jonacatepec'
    },
    {
        id: 6,
        place: 'Amilcingo'
    },
    {
        id: 7,
        place: 'Temoac'
    },
    {
        id: 8,
        place: 'Popotlán'
    },
    {
        id: 9,
        place: 'Zacualpan'
    },
    {
        id: 10,
        place: 'Tlacotepec'
    },
    {
        id: 11,
        place: 'Fracc. Almendros'
    },
    {
        id: 12,
        place: 'Fracc. Tlahuica'
    },
    {
        id: 13,
        place: 'Fracc. Las Llaves'
    },
    {
        id: 14,
        place: 'Fracc. Mariano M.'
    }
];

const information = [
    {
        id: 1,
        text: '"Copiar contenido el carrito" copia tus productos y pégalos en nuestra conversación de WhatsApp.'
    },
    {
        id: 2,
        text: 'El precio del envío puede variar dependiendo de la dirección a la que se enviarán los productos.'
    },
    {
        id: 3,
        text: 'Al terminar de agregar todos los productos al carrito podrás ver el costo total de tus compras en la sección del carrito.'
    },
    {
        id: 4,
        text: 'Puedes hacer tu pedido llamando a 735 244 9749 o mandando un Whatsapp al mismo número.'
    },
    {
        id: 5,
        text: 'Si tienes alguna duda puedes preguntar mandando mensaje directo a nuestras redes sociales, o bien, ver la sección de "Preguntas frecuentes" que se encuentra en el footer.'
    }
]

const ads = [
    {
        id: 1,
        slideNum: 'slide 1',
        link: '/tiendas/carniceria',
        img: '/images/banner_car_poll_d_eva.jpg',
        alt: 'Carnicería Don Julio'
    }
];

const hour = [
    {
        id: 1,
        hour: '08:00 - 17:00',
        category: 'carniceria'
    },
    {
        id: 2,
        hour: '08:00 - 17:00',
        category: 'polleria-don-julio'
    },
    {
        id: 3,
        hour: '19:30 - 22:00',
        category: 'hot-dogs-resno'
    },
    {
        id: 4,
        hour: '08:00 - 17:00',
        category: 'polleria-y-abarroteria'
    }
];

export { products }
export { stores }
export { titles }
export { links }
export { places }
export { information }
export { ads }
export { hour }
export default departments;