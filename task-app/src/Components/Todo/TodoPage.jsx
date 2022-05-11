// import React, { useState } from 'react';
// import ToDoItem from './TodoItem';
// import TodoInput from './TodoInput';
// import '../ToDo.css';
// import BackButton from '../BackButton';
// import Footer from '../Footer';


// function TodoPage(){
//     const [input, setInput] = useState(""); // eslint-disable-line
//     const [items, setItems] = useState([]);

//     function addItem(input){
//         setItems((preValue) => {
//             return [...preValue, input];
//         });
//         setInput("");
//     }

//     function deleteItem(id){
//         setItems((preValue) => {
//             return preValue.filter((item, index) => {
//                 return index !== id;
//             });
//         });
//     }

//     const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};

//     return (
//         <div className='container'>
//             <div className='heading'>
//                 <h1 className='date'>{new Date().toLocaleDateString('en-US', options)}</h1>
//             </div>
//             <TodoInput onAdd={addItem} />
//             <div className='box'>
//                 {items.map((todoItem, index) => (
//                     <ToDoItem 
//                         key={index}
//                         id={index}
//                         text={todoItem}
//                         onChecked={deleteItem}
//                     />
//                 ))}
//             </div>
//             <div style={{marginTop:"20%"}}>
//                 <BackButton />
//                 <Footer />
//             </div>  
//         </div>
//     );
// }

// export default TodoPage;


// from yidan
import React, { useState } from "react";
import ToDoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "../../index.css";
import BackButton from "../BackButton";
import styled from "styled-components";

function TodoPage() {
  const [input, setInput] = useState(""); // eslint-disable-line
  const [items, setItems] = useState([]);

  function addItem(input) {
    setItems((preValue) => {
      return [...preValue, input];
    });
    setInput("");
  }

  function deleteItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <div className="container">
      <div className="heading">
        <h1 className="date">
          {new Date().toLocaleDateString("en-US", options)}
        </h1>
      </div>
      <TodoInput onAdd={addItem} />
      <div className="box">
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
          />
        ))}
      </div>
      <Footer>
        <BackButton />
        <Copyright>© Copyright 2022 Husky Mavericks </Copyright>
      </Footer>
    </div>
  );
}

const Footer = styled.div`
  margin-top: 20%;
`;

const Copyright = styled.div`
  background-color: #84bdbd #8cc;
  font-family: "Montserrat", sans-serif;
  color: whitesmoke;
  padding-top: 5%;
  padding-bottom: 3%;
  text-align: center;
`;

export default TodoPage;