import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/notFound.css';

function NotFound() {

  return (
    <div className="container-notfound container-fluid px-0 m-0">
      <Helmet>
        <title>Página no encontrada | ORDEEM</title>
      </Helmet>
      <div className="notfound-info h-100 d-flex flex-column align-items-center justify-content-center text-center p-2">
        <h1 className="mb-4">404</h1>
        <h3 className="mb-4">Página no encontrada.</h3>
        <p className="mb-4">La página que solicititó, no existe.</p>
        <Link className="text-center" to="/">Regresar al inicio</Link>
      </div>
    </div>
  );
}

export default NotFound;
