import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import departments, { products, stores } from '../data/data';
import '../styles/navbar.css';

function Search() {
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();
  const handleClick = () => {
    products.filter(dataProducts => {
      if(dataProducts.nameProduct.toLowerCase() == filter.toLowerCase()){
        navigate(`/productos/${dataProducts.link}`);
      }
    })
    departments.filter(dataDepartments => {
      if(dataDepartments.department.toLowerCase() == filter.toLowerCase()){
        navigate(`/departamentos/${dataDepartments.link}`);
      }
    })
    stores.filter(dataStores => {
      if(dataStores.store.toLowerCase() == filter.toLowerCase()){
        navigate(`/tiendas/${dataStores.link}`);
      }
    })
    setFilter('');
  }
  const handleKey = (e) => {
    if(e.key === 'Enter'){
      products.filter(dataProducts => {
        if(dataProducts.nameProduct.toLowerCase() == filter.toLowerCase()){
          navigate(`/productos/${dataProducts.link}`);
        }
      })
      departments.filter(dataDepartments => {
        if(dataDepartments.department.toLowerCase() == filter.toLowerCase()){
          navigate(`/departamentos/${dataDepartments.link}`);
        }
      })
      stores.filter(dataStores => {
        if(dataStores.store.toLowerCase() == filter.toLowerCase()){
          navigate(`/tiendas/${dataStores.link}`);
        }
      })
      setFilter('');
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
                  <Link to={`/productos/${dataProducts.link}`} 
                  className="dropdown-item py-1 px-3" 
                  onClick={() => setFilter('')}>
                    <img src={dataProducts.img}/>
                    <div className="d-flex flex-column align-items-start text-truncate">
                      <p className="texto-truncado m-0 text-truncate">{dataProducts.nameProduct}</p>
                      <p className="text-muted m-0">{dataProducts.price.toLocaleString("en", {style: "currency", currency: "USD"})}/
                      {dataProducts.unity}</p>
                    </div>
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
                  <Link to={`/departamentos/${dataDepartments.link}`} 
                  className="dropdown-item py-1 px-3"
                  onClick={() => setFilter('')}>
                    <img src={dataDepartments.img}/>
                    <div className="text-truncate">
                      <p className="text-truncate m-0">{dataDepartments.department}</p>
                    </div>
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
                  <Link to={`/tiendas/${dataStores.link}`} 
                  className="dropdown-item py-1 px-3"
                  onClick={() => setFilter('')}>
                    <img src={dataStores.img}/>
                    <div className="text-truncate">
                      <p className="text-truncate m-0">{dataStores.store}</p>
                    </div>
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