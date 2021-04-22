import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import departments, { products, tiendas } from '../data/data';
import '../styles/navbar.css';

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
  const handleKey = (e) => {
    if(e.key === 'Enter'){
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
  }

  return(
    <div id="container-search" className="d-flex btn-group">
      <button onClick={() => handleClick()} className="fas fa-search"></button>
      <input className="search" 
      type="search" 
      placeholder="Buscar" 
      autoComplete="off" 
      value={filter} onChange={e => setFilter(e.target.value)} 
      onKeyPress={handleKey}
      id="searchDropdown" 
      data-toggle="dropdown" 
      aria-expanded={filter ? true : false}/>
      <ul className={filter ? "ul-search-on dropdown-menu" : "ul-search-off"} aria-labelledby="searchDropdown">
        {products.map(search => {
          if(filter.length !== ""){
            if(search.product.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={search.id}>
                  <Link to={`/productos/${search.link}`} className="dropdown-item">
                    <img src={search.img}/>{search.product}
                  </Link>
                </li>;
            }else{
              return null;
            }
          }
        })}
        {departments.map(search => {
          if(filter.length !== ""){
            if(search.departamento.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={search.id}>
                  <Link to={`/departamentos/${search.link}`} className="dropdown-item">
                    <img src={search.img}/><p>{search.departamento}</p>
                  </Link>
                </li>;
            }else{
              return null;
            }
          }
        })}
        {tiendas.map(search => {
          if(filter.length !== ""){
            if(search.text.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={search.id}>
                  <Link to={`/departamentos/${search.link}`} className="dropdown-item">
                    <img src={search.img}/><p>{search.text}</p>
                  </Link>
                </li>;
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