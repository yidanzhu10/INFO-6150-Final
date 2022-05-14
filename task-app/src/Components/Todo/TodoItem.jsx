//from Yidan
import React, { useState, useEffect } from "react";
import "../../index.css";
import styled from "styled-components";

function ToDoItem(props) {
  const [itemStatus, setItemStatus] = useState(false);
  useEffect(() => {

    if(props.itemStatus == "checked"){
      setItemStatus(true);
    }else {
      setItemStatus(false);
    }


  }, [])

  function changeItemStauts(event){
    props.changeStatus(props.number, itemStatus);
    event.preventDefault();
    setItemStatus(!itemStatus);
  }

  

  return (
    <Item className="item">
      {/* <input type="checkbox"   /> */}
      <input type="checkbox" onChange={changeItemStauts} checked={itemStatus} />
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