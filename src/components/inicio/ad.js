import React from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/ad.css';

function Ad() {
    var img1 = <Link to="/productos/carniceria-doña-eva-costilla-de-cerdo"><img src="https://1.bp.blogspot.com/-sJ6x3A8__uA/W2hNmaVNF_I/AAAAAAAACag/j3je8VHhsgwV42MDQ2lyVyOUzfcGa4eewCPcBGAYYCw/s1600/Banner%2BLa%2BPenso.jpg"/></Link>;
    var img2 = <Link to="/productos/carniceria-doña-eva-codillo-de-cerdo"><img src="https://image.freepik.com/vector-gratis/mejor-anuncio-comida-pasta-italiana_23-2148455391.jpg"/></Link>;
    var img3 = <Link to="/productos/polleria-doña-eva-pollo-entero"><img src="https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2016/09/promocion-vaso-coca-cola-mcdonalds.jpg"/></Link>;
    const list = [img1, img2, img3];

    var ullist = list.map((lilist, index) =>
      <li key={index} className="list-ad">{lilist}</li>
    );

    return(
        <section className="container-ad">
            <ul className="ul-ad">
                {ullist}
            </ul>
        </section>
    );
}

export default Ad;