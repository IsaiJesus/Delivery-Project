import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import departments from '../../data/data';
import '../csscomponents/nav.css';

function Nav() {

    return(
      <nav className="container-nav">
        <NavLink to="/departamentos" id="hover-departaments" activeClassName="nav-active">
          <p>Departamentos</p>
          <div className="division-nav-section">
            {departments.map(data => (
              <Link key={data.id} to={`/departamentos/${data.link}`}>{data.departamento}</Link>
            ))}
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