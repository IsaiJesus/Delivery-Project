import React from 'react';
import { useState } from 'react';
import '../csscomponents/search.css';

function Search() {
    const list = ["Costilla de cerdo", "Lomo de cerdo", "Chuleta de cerdo", "Pierna de pollo",
     "Ala de pollo", "Papas sabritas", "Plato de mole", "Coca cola", "Longaniza", "Tacos", "Tortas", "Jugo",
     "Pozole", "Agua", "Burrito"];
    const [filter, setFilter] = useState("");


    return(
        <div className="container-search">
            <a href="#" className="fas fa-search"></a>
            <input type="search" placeholder="Buscar" value={filter} onChange={e => setFilter(e.target.value)}/>
            <ul className={filter ? "ul-search-on" : "ul-search-off"}>
                {list.map(name => {
                if(filter.length !== ""){
                    if(name.toLowerCase().indexOf(filter.toLowerCase()) >- 1){
                        return <li><a href="#">{name}</a></li>;
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