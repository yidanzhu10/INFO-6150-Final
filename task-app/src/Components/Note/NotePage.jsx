//from YIdan
import React, { useEffect } from "react";
import { useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteArea from "./NoteArea";
import Note from "./Note";
import "../../index.css";
import BackButton from "../BackButton";
import styled from "styled-components";
import axios from "axios";

// import swal from "sweetalert";
// import { wait } from "@testing-library/user-event/dist/utils";

function NotePage() {
  const [notes, setNotes] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");
  // const [deleteTrigger, setDeleteTrigger] = useState("");
  const [deleteTrigger, setDeleteTrigger] = useState({
    status: "aaa"
  });

  function addToNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }


  useEffect(() => {
    console.log(sessionStorage.getItem("email"));
    setCurrentEmail(sessionStorage.getItem("email"));
    console.log(currentEmail + " currentEmail");
    // retrieveNote();
    console.log(currentEmail + " after retrieve");
    console.log("first loaded");
    console.log(notes);
  }, [])

  useEffect(() => {

    console.log(currentEmail + " currentEmail in node");
    retrieveNote();

  }, [currentEmail])

  useEffect(() => {

    console.log(deleteTrigger + " deleteTrigger in node");
    
    retrieveNote();
    console.log('delete use effect completed');

  }, [deleteTrigger])


  function addToNote(newNote) {
    let newlist = [...notes, newNote];
    console.log("new note is " + newNote.title);
    console.log(notes);
    const newNotes = {

      email: currentEmail,
      notelist: newlist
    };
    axios.post('http://localhost:3001/users/update', newNotes);
    // retrieveNote();
    setNotes(newlist);
    return;
  }

  function retrieveNote() {

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

            setNotes(item.notelist);
            console.log()
            return;
          }
        });

      });
  }

  async function deleteNote(number) {
    
    let newlist = notes;
    let removedlist = newlist.splice(number, 1);
    console.log(notes);
    const newNotes = {

      email: currentEmail,
      notelist: newlist
    };
    axios.post('http://localhost:3001/users/update', newNotes);
    // retrieveNote();
    setNotes(newlist);
    // setDeleteTrigger(deleteTrigger + '-');
    console.log('delete completed');
    console.log(notes);

    setDeleteTrigger({status:'aaa'});
    window.location.reload();
    // setCurrentEmail(currentEmail);

  }

  return (
    <div className="notePage">
      <NoteHeader />
      <NoteArea onAdd={addToNote} />
      {notes.map((item, index) => {
        console.log("current index is " + index);
        return <Note number={index} title={item.title} deleteNote={deleteNote} content={item.content} />;
      })}
      <br />
      <Footer1>
        <BackButton />
        <Copyright>?? Copyright 2022 Husky Mavericks </Copyright>
      </Footer1>
    </div>
  );
}

const Footer1 = styled.div`
  margin-top: 25%;
`;

const Copyright = styled.div`
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  color: grey;
  padding-top: 3%;
  padding-bottom: 3%;
  text-align: center;
`;

export default NotePage;