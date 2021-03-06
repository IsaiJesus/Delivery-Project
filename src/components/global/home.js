import React from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/home.css';

function Home() {

    return(
      <div className="container-home">
        <Link to="/" className="box-home">
          <img src="/images/tree-logo.png"/>
        </Link>
      </div>
    );
}

export default Home;