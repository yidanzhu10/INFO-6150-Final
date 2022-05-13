//from Yidan
import React from "react";
import "../../index.css";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p className="noteContent">{props.content}</p>
      <button className="deleteButton">DELETE</button>
    </div>
  );
}

export default Note;