// import React, { useState } from 'react';
// import '../ToDo.css';

// function TodoInput(props){
//     const [input, setInput] = useState("");

//     function addItem(event){
//         const newValue = event.target.value;
//         setInput(newValue);
//     }

//     return (
//         <div>
//             <div className='form'>
//                 <input onChange={addItem} type="text" value={input} placeholder="New Item"></input>
//                 <button className='addButton'
//                     onClick={() => {
//                         props.onAdd(input);
//                         setInput("");
//                     }}
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
        
//     );
// }

// export default TodoInput;


//from Yidan
import React, { useState } from "react";
import "../../index.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  function addItem(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    // props.onAdd(input);
    // event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  return (
    <div>
      <div className="inputForm">
        <input
          className="todoInput"
          onChange={addItem}
          type="text"
          value={inputText}
          placeholder="New Item"
        ></input>
        <button
          className="add"
          onClick={() => {
            props.onAdd(inputText);
            setInputText("");
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default TodoInput;