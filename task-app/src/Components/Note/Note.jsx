//from Yidan
import React from "react";
import "../../index.css";

function Note(props) {
  const deleteClick = (event) => {
    event.preventDefault();
    const { deleteNote, number } = props;
    deleteNote(number);
  }
  console.log(props);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p className="noteContent">{props.content}</p>
      <button className="deleteButton" onClick={deleteClick}>DELETE</button>
    </div>
  );
}

export default Note;