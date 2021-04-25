import React from 'react';
import '../styles/navbar.css';
import { NavLink, Link } from 'react-router-dom';
import departments from '../data/data';

function Nav() {

  return(
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex justify-content-center">
        <li className="nav-item dropdown btn-group">
          <NavLink to="/departamentos" className="nav-link px-3" activeClassName="nav-active">
            Departamentos
          </NavLink>
          <button className="nav-link dropdown-toggle-split bg-white" 
          id="navbarDropdown" 
          role="button" 
          data-toggle="dropdown" 
          aria-expanded="false">
            <span className="fas fa-angle-down"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {departments.map(data => (
              <li key={data.id}>
                <Link to={`/departamentos/${data.link}`} className="dropdown-item">{data.department}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/departamentos/comida" className="nav-link px-3" activeClassName="nav-active">Comida</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/tiendas" className="nav-link px-3" activeClassName="nav-active">Tiendas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/envios" className="nav-link px-3" activeClassName="nav-active">Envíos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
