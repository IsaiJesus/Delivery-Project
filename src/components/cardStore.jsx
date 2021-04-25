import React from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/cards.css';

const CardStore = ({link, img, store}) => {
  return ( 
    <div className="box-store col p-0">
      <Link to={`/tiendas/${link}`}className="square-store align-items-center card m-2">
        <img src={img} alt={store}/>
        <div className="text-square">
          <p className="m-0">{store}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardStore;