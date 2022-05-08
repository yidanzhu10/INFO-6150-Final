import React from 'react';
import '../ToDo.css';

function ToDoItem(props){
    return (
        <div className='item'>
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    );
}

export default ToDoItem;