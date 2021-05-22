import React from 'react';
import '../styles/littleComponents.css';

function Whatsapp() {

  return(
    <div className="container-whatsapp">
      <a target="_blanck" 
      className="fab fa-whatsapp" 
      href="https://api.whatsapp.com/send?phone=527352449749&amp;text=¡Tomemos&nbsp;el&nbsp;pedido!"></a>
    </div>
  );
}

export default Whatsapp;