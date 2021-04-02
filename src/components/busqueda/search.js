import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import departments, { products, tiendas } from '../../data/data';
import '../csscomponents/search.css';

function Search() {
    const [filter, setFilter] = useState('');

    let history = useHistory();
    const handleClick = () => {
        products.filter(data => {
            if(data.product.toLowerCase() == filter.toLowerCase()){
                history.push(`/productos/${data.link}`);
            }
        })
        departments.filter(data => {
            if(data.departamento.toLowerCase() == filter.toLowerCase()){
                history.push(`/departamentos/${data.link}`);
            }
        })
        tiendas.filter(data => {
            if(data.text.toLowerCase() == filter.toLowerCase()){
                history.push(`/tiendas/${data.link}`);
            }
        })
    }

    return(
        <div className="container-search">
            <button onClick={() => handleClick()} className="fas fa-search"></button>
            <input type="search" placeholder="Buscar" autoComplete="off" value={filter} onChange={e => setFilter(e.target.value)}/>
            <ul className={filter ? "ul-search-on" : "ul-search-off"}>
                {products.map(search => {
                if(filter.length !== ""){
                    if(search.product.toLowerCase().indexOf(filter.toLowerCase()) > -1){
                        return <li key={search.id}><Link to={`/productos/${search.link}`}><img src={search.img}/><p>{search.product}</p></Link></li>;
                    }else{
                        return null;
                    }
                }
                })}
                {departments.map(search => {
                if(filter.length !== ""){
                    if(search.departamento.toLowerCase().indexOf(filter.toLowerCase()) > -1){
                        return <li key={search.id}><Link to={`/departamentos/${search.link}`}><img src={search.img}/><p>{search.departamento}</p></Link></li>;
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