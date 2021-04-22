import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/todo.css';

const Todo = ({props}) => {
  return ( 
    <Link to={props.link} className="btn todo">{props.text}</Link>
  );
}

export default Todo;