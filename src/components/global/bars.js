import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../csscomponents/bars.css';

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
      <button className="fas fa-bars" onClick={handleToggle}></button>
      <div className={togglebars ? "container-nav-bars-on" : "container-nav-bars-off"}>
        <div className="division-nav-bars">
          <div className="box-nav-bars">
            <NavLink to="/departamentos" id="btn-nav-bars-arrow" activeClassName="bars-active">Departamentos</NavLink>
            <button className={toggledep ? "fas fa-chevron-up" : "fas fa-chevron-down"} onClick={handleToggleD}></button>
          </div>
          <div className={toggledep ? "btn-nav-bars-section-on" : "btn-nav-bars-section-off"}>
            <Link to="/departamentos/carne-de-cerdo">Carne de cerdo</Link>
            <Link to="/departamentos/carne-de-cerdo">Carne de pollo</Link>
            <Link to="/departamentos/carne-de-cerdo">Frutería</Link>
            <Link to="/departamentos/carne-de-cerdo">Pescado</Link>
            <Link to="/departamentos/carne-de-cerdo">Lácteos</Link>
            <Link to="/departamentos/carne-de-cerdo">Bebidas</Link>
            <Link to="/departamentos/carne-de-cerdo">Tortas</Link>
            <Link to="/departamentos/carne-de-cerdo">Tacos</Link>
          </div>
          <div className="box-nav-bars">
            <NavLink to="/tiendas" activeClassName="bars-active">Tiendas</NavLink>
          </div>
          <div className="box-nav-bars">
            <NavLink to="/envios" activeClassName="bars-active">Envíos</NavLink>
          </div>
          <div className="box-nav-bars">
            <NavLink to="/comida" activeClassName="bars-active">Comida</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bars;