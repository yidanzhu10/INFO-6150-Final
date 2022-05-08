import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import TodoInput from './TodoInput';
import '../ToDo.css';

function TodoPage(){
    const [input, setInput] = useState(""); // eslint-disable-line
    const [items, setItems] = useState([]);

    function addItem(input){
        setItems((preValue) => {
            return [...preValue, input];
        });
        setInput("");
    }

    function deleteItem(id){
        setItems((preValue) => {
            return preValue.filter((item, index) => {
                return index !== id;
            });
        });
    }

    const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};

    return (
        <div className='container'>
            <div className='heading'>
                <h1 className='date'>{new Date().toLocaleDateString('en-US', options)}</h1>
            </div>
            <TodoInput onAdd={addItem} />
            <div className='box'>
                {items.map((todoItem, index) => (
                    <ToDoItem 
                        key={index}
                        id={index}
                        text={todoItem}
                        onChecked={deleteItem}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoPage;