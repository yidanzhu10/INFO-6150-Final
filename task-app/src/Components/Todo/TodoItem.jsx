//from Yidan
import React from "react";
import "../../index.css";
import styled from "styled-components";

function ToDoItem(props) {
  return (
    <Item className="item">
      <input type="checkbox" />
      <p className="todoContent">{props.text}</p>
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