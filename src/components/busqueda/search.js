import React from 'react';
import { useState } from 'react';
import '../csscomponents/search.css';

function Search() {
    const itemsList = [
        {
            id: '1',
            img: 'https://dam.cocinafacil.com.mx/wp-content/uploads/2020/04/comida-china-tipica.jpg',
            text: 'Comida'
        },
        {
            id: '2',
            img: 'https://cdn.cienradios.com/wp-content/uploads/sites/3/2019/10/hamburguesa.jpg',
            text: 'Hamburguesa con papas'
        },
        {
            id: '3',
            img: 'https://cdn.shopify.com/s/files/1/0469/3193/articles/negocio_carniceria_1024x1024.jpg?v=1582731730',
            text: 'Carnicería Doña Eva'
        }
    ];
    const [filter, setFilter] = useState('');

    return(
        <div className="container-search">
            <a href="#" className="fas fa-search"></a>
            <input type="search" placeholder="Buscar" autoComplete="off" value={filter} onChange={e => setFilter(e.target.value)}/>
            <ul className={filter ? "ul-search-on" : "ul-search-off"}>
                {itemsList.map(search => {
                if(filter.length !== ""){
                    if(search.text.toLowerCase().indexOf(filter.toLowerCase()) > -1){
                        return <li key={search.id}><a href="#"><img src={search.img}/><p>{search.text}</p></a></li>;
                    }else{
                        return null;
                    }
                }
                })}
            </ul>
        </div>
    );
}

export default Search;