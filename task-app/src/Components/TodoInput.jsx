import React, { useState } from 'react';
import '../ToDo.css';

function TodoInput(props){
    const [input, setInput] = useState("");

    function addItem(event){
        const newValue = event.target.value;
        setInput(newValue);
    }

    return (
        <div>
            <div className='form'>
                <input onChange={addItem} type="text" value={input} placeholder="New Item"></input>
                <button className='addButton'
                    onClick={() => {
                        props.onAdd(input);
                        setInput("");
                    }}
                >
                    +
                </button>
            </div>
        </div>
        
    );
}

export default TodoInput;