import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../csscomponents/todo.css';

const Todo = ({props}) => {
    return ( 
        <Fragment>
            <Link to={props.link} className="container-todo">{props.text}</Link>
        </Fragment>
    )
}

export default Todo;