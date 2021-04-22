import React from 'react'; 
import { Link } from 'react-router-dom';
import '../styles/store.css';

const Store = ({props}) => {
  return ( 
    <div className="box-store col p-0">
      <Link to={`/tiendas/${props.link}`}className="square-store align-items-center card m-2">
        <img src={props.img} alt={props.text}/>
        <div className="text-square">
          <p className="m-0">{props.text}</p>
        </div>
      </Link>
    </div>
  );
}

export default Store;