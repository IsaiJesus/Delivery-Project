import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import departments from '../data/data';
import '../styles/navbar.css';

function Bars() {
  const [togglebars, setTogglebars] = useState(false);
  const [toggledep, setToggledep] = useState(false);

  const handleToggle = () => {
    setTogglebars(!togglebars);
  };
  const handleToggleD = () => {
    setToggledep(!toggledep);
  };

  return(
    <div className="container-bars">
      <button className="navbar-toggler px-0" onClick={handleToggle}>
        <span className="fas fa-bars"></span>
      </button>
      <div className={togglebars ? "container-nav-bars-on " : "container-nav-bars-off"}>
        <div className="division-nav-bars">
          <div className="box-nav-bars">
            <NavLink to="/departamentos" id="btn-nav-bars-arrow" activeClassName="bars-active">Departamentos</NavLink>
            <button className={toggledep ? "fas fa-chevron-up" : "fas fa-chevron-down"} onClick={handleToggleD}></button>
          </div>
          <div className={toggledep ? "btn-nav-bars-section-on" : "btn-nav-bars-section-off"}>
            {departments.map(data => (
              <Link key={data.id} to={`/departamentos/${data.link}`}>{data.department}</Link>
            ))}
          </div>
          <div className="box-nav-bars">
            <Link to="/departamentos/comida">Comida</Link>
          </div>
          <div className="box-nav-bars">
            <NavLink to="/tiendas" activeClassName="bars-active">Tiendas</NavLink>
          </div>
          <div className="box-nav-bars">
            <NavLink to="/envios" activeClassName="bars-active">Envíos</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bars;