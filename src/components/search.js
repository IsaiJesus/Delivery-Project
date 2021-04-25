import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import departments, { products, stores } from '../data/data';
import '../styles/navbar.css';

function Search() {
  const [filter, setFilter] = useState('');

  let history = useHistory();
  const handleClick = () => {
    products.filter(data => {
      if(data.nameProduct.toLowerCase() == filter.toLowerCase()){
        history.push(`/productos/${data.link}`);
      }
    })
    departments.filter(data => {
      if(data.department.toLowerCase() == filter.toLowerCase()){
        history.push(`/departamentos/${data.link}`);
      }
    })
    stores.filter(data => {
      if(data.store.toLowerCase() == filter.toLowerCase()){
        history.push(`/tiendas/${data.link}`);
      }
    })
  }
  const handleKey = (e) => {
    if(e.key === 'Enter'){
      products.filter(data => {
        if(data.nameProduct.toLowerCase() == filter.toLowerCase()){
          history.push(`/productos/${data.link}`);
        }
      })
      departments.filter(data => {
        if(data.department.toLowerCase() == filter.toLowerCase()){
          history.push(`/departamentos/${data.link}`);
        }
      })
      stores.filter(data => {
        if(data.store.toLowerCase() == filter.toLowerCase()){
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
        {products.map(data => {
          if(filter.length !== ""){
            if(data.nameProduct.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={data.id}>
                  <Link to={`/productos/${data.link}`} className="dropdown-item">
                    <img src={data.img}/>{data.nameProduct}
                  </Link>
                </li>;
            }else{
              return null;
            }
          }
        })}
        {departments.map(data => {
          if(filter.length !== ""){
            if(data.department.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={data.id}>
                  <Link to={`/departamentos/${data.link}`} className="dropdown-item">
                    <img src={data.img}/><p>{data.department}</p>
                  </Link>
                </li>;
            }else{
              return null;
            }
          }
        })}
        {stores.map(data => {
          if(filter.length !== ""){
            if(data.store.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={data.id}>
                  <Link to={`/departamentos/${data.link}`} className="dropdown-item">
                    <img src={data.img}/><p>{data.store}</p>
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