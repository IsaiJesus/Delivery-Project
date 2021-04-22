import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cardDep.css';

const CardDep = ({props}) => {
  return ( 
    <div className="box-department col p-0">
      <Link to={`/departamentos/${props.link}`} className="circle-department align-items-center card m-2">
        <img src={props.img} alt={props.departamento}/>
        <div className="text-department">
          <p className="m-0">{props.departamento}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardDep;