import React, { useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteArea from "./NoteArea";
import Note from "./Note";
import "../note.css";

function NotePage(){
    const [notes, setNotes] = useState([]);

    function addToNote(newNote){
        setNotes((preNotes) => {
            return [...preNotes, newNote];
        });
    }
    return (
        <div>
            <NoteHeader />
            <NoteArea onAdd={addToNote} />
            {notes.map((item) => {
                return <Note title={item.title} content={item.content} />;
            })}
            <Note key={1} title="Note Title" content="Note content" />
        </div>
    );
}

export default NotePage;