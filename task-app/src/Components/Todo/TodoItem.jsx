// import React from 'react';
// import '../ToDo.css';

// function ToDoItem(props){
//     return (
//         <div className='item'>
//             <input type="checkbox" />
//             <p>{props.text}</p>
//         </div>
//     );
// }

// export default ToDoItem;


//from Yidan
import React from "react";
// import "./todo.css";
import "../../index.css";
import styled from "styled-components";

function ToDoItem(props) {
  return (
    <Item className="item">
      <input type="checkbox" />
      <p className="todoContent">{props.text}</p >
    </Item>
  );
}

const Item = styled.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
  font-family: "Montserrat", sans-serif;
`;

export default ToDoItem;