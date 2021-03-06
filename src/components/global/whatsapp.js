import React from 'react';
import '../csscomponents/whatsapp.css';

function Whatsapp() {

    return(
        <div className="container-whatsapp">
            <a target="_blanck" href="https://api.whatsapp.com/send?phone=527351884715&amp;text=Envia&nbsp;un&nbsp;mensaje&nbsp;para&nbsp;que&nbsp;te&nbsp;apoyemos." className="fab fa-whatsapp"></a>
        </div>
    );
}

export default Whatsapp;