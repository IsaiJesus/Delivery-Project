import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../csscomponents/nav.css';

function Nav() {

    return(
      <nav className="container-nav">
        <NavLink to="/departamentos" id="hover-departaments" activeClassName="nav-active">
          <p>Departamentos</p>
          <div className="division-nav-section">
            <Link to="/departamentos/carne-de-cerdo">Carne de cerdo</Link>
            <Link to="/departamentos/carne-de-cerdo">Carne de pollo</Link>
            <Link to="/departamentos/carne-de-cerdo">Comida</Link>
          </div>
        </NavLink>
        <NavLink to="/tiendas" activeClassName="nav-active">
          <p>Tiendas</p>
        </NavLink>
        <NavLink to="/envios" activeClassName="nav-active">
          <p>Envíos</p>
        </NavLink>
      </nav>
    );
}

export default Nav;