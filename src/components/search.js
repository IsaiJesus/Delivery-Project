import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import departments, { products, stores } from '../data/data';
import '../styles/navbar.css';

function Search() {
  const [filter, setFilter] = useState('');

  let history = useHistory();
  const handleClick = () => {
    products.filter(dataProducts => {
      if(dataProducts.nameProduct.toLowerCase() == filter.toLowerCase()){
        history.push(`/productos/${dataProducts.link}`);
      }
    })
    departments.filter(dataDepartments => {
      if(dataDepartments.department.toLowerCase() == filter.toLowerCase()){
        history.push(`/departamentos/${dataDepartments.link}`);
      }
    })
    stores.filter(dataStores => {
      if(dataStores.store.toLowerCase() == filter.toLowerCase()){
        history.push(`/tiendas/${dataStores.link}`);
      }
    })
  }
  const handleKey = (e) => {
    if(e.key === 'Enter'){
      products.filter(dataProducts => {
        if(dataProducts.nameProduct.toLowerCase() == filter.toLowerCase()){
          history.push(`/productos/${dataProducts.link}`);
        }
      })
      departments.filter(dataDepartments => {
        if(dataDepartments.department.toLowerCase() == filter.toLowerCase()){
          history.push(`/departamentos/${dataDepartments.link}`);
        }
      })
      stores.filter(dataStores => {
        if(dataStores.store.toLowerCase() == filter.toLowerCase()){
          history.push(`/tiendas/${dataStores.link}`);
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
        {products.map(dataProducts => {
          if(filter.length !== ""){
            if(dataProducts.nameProduct.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={dataProducts.id}>
                  <Link to={`/productos/${dataProducts.link}`} className="dropdown-item">
                    <img src={dataProducts.img}/>
                    {dataProducts.nameProduct}
                  </Link>
                </li>;
            }else{
              return null;
            }
          }
        })}
        {departments.map(dataDepartments => {
          if(filter.length !== ""){
            if(dataDepartments.department.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={dataDepartments.id}>
                  <Link to={`/departamentos/${dataDepartments.link}`} className="dropdown-item">
                    <img src={dataDepartments.img}/><p>{dataDepartments.department}</p>
                  </Link>
                </li>;
            }else{
              return null;
            }
          }
        })}
        {stores.map(dataStores => {
          if(filter.length !== ""){
            if(dataStores.store.toLowerCase().indexOf(filter.toLowerCase()) > -1){
              return <li key={dataStores.id}>
                  <Link to={`/tiendas/${dataStores.link}`} className="dropdown-item">
                    <img src={dataStores.img}/><p>{dataStores.store}</p>
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