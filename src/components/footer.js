import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {

  return(
    <footer className="container-footer container-fluid d-flex flex-column align-items-center justify-content-center p-4">
      <div className="division-footer container-xl row-cols-1 row row-cols-md-4 p-0">
        <div className="container-logo-footer col py-4">
          <img src="/images/tree-logo-32.png" alt="ORDEEM"/>
          <h3>ORDEEM</h3>
          <div className="col-social w-100 d-flex justify-content-around">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
        <div className="col py-2 text-center">
          <h4>Cóntacto para información</h4>
          <div className="row row-cols-2 row-cols-md-1">
            <div className="col p-0 icon-footer">
              <a target="_blanck" href="https://api.whatsapp.com/send?phone=527351884715&amp;text=Envia&nbsp;un&nbsp;mensaje&nbsp;para&nbsp;que&nbsp;te&nbsp;apoyemos." className="fab fa-whatsapp"></a>
              <p>7352134567</p>
            </div>
            <div className="col p-0 icon-footer">
              <i className="far fa-envelope"></i>
              <p>ejemplo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col py-2 text-center">
          <h4>Secciones</h4>
          <div className="footer-sections d-flex flex-column">
            <Link to="/">Inicio</Link>
            <Link to="/departamentos">Departamentos</Link>
            <Link to="/departamentos/comida">Comida</Link>
            <Link to="/tiendas">Tiendas</Link>
            <Link to="/envios">Envíos</Link>
          </div>
        </div>
        <div className="container-info-footer col py-2 text-center">
          <h4>Acerca de</h4>
          <div className="footer-sections d-flex flex-column">
            <Link to="/terminos-y-condiciones">Términos y condiciones</Link>
            <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link to="/nosotros">Nosotros</Link>
          </div>
        </div>
      </div>
      <div className="text-brand my-2">
        <p className="m-0">ORDEEM 2021</p>
      </div>
    </footer>
  );
}

export default Footer;