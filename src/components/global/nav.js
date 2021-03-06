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
            <Link to="/departamentos/carne-de-cerdo">Carne de res</Link>
            <Link to="/departamentos/carne-de-cerdo">Frutas y verduras</Link>
            <Link to="/departamentos/carne-de-cerdo">Pescado y mariscos</Link>
            <Link to="/departamentos/carne-de-cerdo">Lácteos</Link>
            <Link to="/departamentos/carne-de-cerdo">Bebidas</Link>
            <Link to="/departamentos/carne-de-cerdo">Comida</Link>
            <Link to="/departamentos/carne-de-cerdo">Despensa</Link>
            <Link to="/departamentos/carne-de-cerdo">Bebidas</Link>
            <Link to="/departamentos/carne-de-cerdo">Botanas</Link>
            <Link to="/departamentos/carne-de-cerdo">Panadería</Link>
            <Link to="/departamentos/carne-de-cerdo">Congelados</Link>
            <Link to="/departamentos/carne-de-cerdo">Papelería</Link>
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