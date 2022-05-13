

// from yidan
import React, { useState } from "react";
import { useEffect } from "react";
import ToDoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import "../../index.css";
import BackButton from "../BackButton";
import styled from "styled-components";
import axios from "axios";

function TodoPage() {
  const [inputText, setInputText] = useState(""); // eslint-disable-line
  const [todo, settodo] = useState({
    content: "",
    status: ""
  });
  const [items, setItems] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  const [todochange, setTodochange] = useState({
    status: "aaa"
  });

  function addItem(newinput) {
    // setItems((preValue) => {
    //   return [...preValue, input];
    // });
    // setInput("");



    console.log(todo.content + " to do is changed");

    let newtodo = {
      content: newinput,
      status:"unchecked"
    }
    //retrieveTodo();
    let newlist = [...items, newtodo];
    // setNotes((preNotes) => {
    //     console.log("setnotes");
    //     console.log([...preNotes, newNote]);
    //     return ;
    // });

    console.log("new to do item is " + todo.content);
    console.log(items);
    const newTodos = {

      email: currentEmail,
      todolist: newlist
    };
    axios.post('http://localhost:3001/users/updatetodo', newTodos);
    // retrieveNote();
    setItems(newlist);

    return;
  }

  function deleteItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    console.log(sessionStorage.getItem("email"));
    setCurrentEmail(sessionStorage.getItem("email"));
    console.log(currentEmail + " currentEmail");
    retrieveTodo();
    console.log(currentEmail + " after retrieve");
    console.log("first loaded");
    console.log(items);
  }, [])

  useEffect(() => {

    console.log(currentEmail + " currentEmail in node");
    retrieveTodo();

  }, [currentEmail])

  useEffect(() => {

    
    console.log(todochange + " todochange ");
    retrieveTodo();

  }, [todochange])

  

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  function retrieveTodo() {

    let users = fetch("http://localhost:3001/users/users")
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      }).then(users => {


        console.log("Current user is " + currentEmail);
        users.find((item) => {
          console.log(item.email);
          console.log(currentEmail);
          if (item.email == currentEmail) {

            setItems(item.todolist);
            console.log("retrieve todo is " + items);
            return;
          }
        });



      });
  }


  function changeStatus(number, itemStatus) {
    let newlist = items;
    var newtodoitem = newlist[number];
    console.log("before if " + newlist);
    console.log(newtodoitem)
    if(itemStatus){
      newtodoitem ={
        content: newtodoitem.content,
        status: "unchecked"
      };
    }else{
      newtodoitem ={
        content: newtodoitem.content,
        status: "checked"
      };
    }
    
    newlist.splice(number, 1, newtodoitem);
    console.log("after if " + newlist);
    console.log(newtodoitem);

    const newTodo = {
      email: currentEmail,
      todolist: newlist
    };
    axios.post('http://localhost:3001/users/updatetodo', newTodo);
    setItems(newlist);
    setTodochange({status:'aaa'});
    
  }

  return (
    <div className="todoContainer">
      <div className="heading">
        <h1 className="date">
          {new Date().toLocaleDateString("en-US", options)}
        </h1>
      </div>
      <TodoInput onAdd={addItem} />
      <div className="box">
        {items.map((todoItem, index) => (
          <ToDoItem
            // key={index}
            number={index}
            itemStatus={todoItem.status}
            text={todoItem.content}
            changeStatus={changeStatus}
            // onChecked={deleteItem}
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