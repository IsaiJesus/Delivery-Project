import React from "react";
import "../styles/navbar.css";
import { NavLink, Link } from "react-router-dom";
import departments from "../data/data";

function Nav() {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav w-100 d-flex justify-content-center">
        <li className="nav-item dropdown btn-group">
          <NavLink
            to="/departamentos"
            className={({ isActive, isPending }) =>
              isPending ? "nav-active" : isActive ? "nav-link px-3" : "nav-link px-3"
            }
          >
            Departamentos
          </NavLink>
          <button
            className="nav-link dropdown-toggle-split bg-white"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="fas fa-angle-down"></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {departments.map((dataDepartments) => (
              <li key={dataDepartments.id}>
                <Link
                  to={`/departamentos/${dataDepartments.link}`}
                  className="dropdown-item"
                >
                  {dataDepartments.department}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="nav-item">
          <NavLink
            to="/departamentos/comida"
            className={({ isActive, isPending }) =>
              isPending ? "nav-active" : isActive ? "nav-link px-3" : "nav-link px-3"
            }
          >
            Comida
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/tiendas"
            className={({ isActive, isPending }) =>
              isPending ? "nav-active" : isActive ? "nav-link px-3" : "nav-link px-3"
            }
          >
            Tiendas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/envios"
            className={({ isActive, isPending }) =>
              isPending ? "nav-active" : isActive ? "nav-link px-3" : "nav-link px-3"
            }
          >
            Envíos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
