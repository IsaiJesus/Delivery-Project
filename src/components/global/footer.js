import React from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/footer.css';
import departments from '../../data/data';

function Footer() {

    return(
      <footer className="container-footer">
        <div className="division-footer">
            <div className="container-logo-footer">
                <img src="/images/tree-logo-32.png"/>
                <div className="box-social">
                    <a href="#" className="fab fa-facebook"></a>
                    <a href="#" className="fab fa-instagram"></a>
                </div>
            </div>
            <div className="container-contact-footer">
                <h4>Cóntacto para información</h4>
                <div className="contact-footer">
                    <div className="icon-footer">
                    <a target="_blanck" href="https://api.whatsapp.com/send?phone=527351884715&amp;text=Envia&nbsp;un&nbsp;mensaje&nbsp;para&nbsp;que&nbsp;te&nbsp;apoyemos." className="fab fa-whatsapp"></a>
                        <p>7352134567</p>
                    </div>
                    <div className="icon-footer">
                        <i className="far fa-envelope"></i>
                        <p>ejemplo@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="container-a-footer">
                <h4>Secciones</h4>
                <div className="a-footer">
                    <Link to="/">Inicio</Link>
                    <Link to="/departamentos">Departamentos</Link>
                    <Link to="/tiendas">Tiendas</Link>
                    <Link to="/envios">Envíos</Link>
                    {departments.filter(data => data.link === 'comida').map(data => (
                        <Link key={data.id} to={`/departamentos/${data.link}`}>{data.departamento}</Link>
                    ))}
                </div>
            </div>
            <div className="container-info-footer">
                <h4>Acerca de:</h4>
                <div className="info-footer">
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Preguntas frecuentes</a>
                    <a href="#">Nosotros</a>
                </div>
            </div>
        </div>
      </footer>
    );
}

export default Footer;