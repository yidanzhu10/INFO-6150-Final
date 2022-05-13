//from Yidan
import React, { useState } from "react";
import "../../index.css";

function TodoInput(props) {
  const [input, setInput] = useState("");

  function addItem(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  return (
    <div>
      <div className="inputForm">
        <input
          className="todoInput"
          onChange={addItem}
          type="text"
          value={input}
          placeholder="New Item"
        ></input>
        <button
          className="add"
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