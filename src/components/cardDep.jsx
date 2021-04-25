import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cards.css';

const CardDep = ({link, img, department}) => {
  return ( 
    <div className="box-department col p-0">
      <Link to={`/departamentos/${link}`} className="circle-department align-items-center card m-2">
        <img src={img} alt={department}/>
        <div className="text-department">
          <p className="m-0">{department}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardDep;