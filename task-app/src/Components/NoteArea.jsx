import React, { useState } from "react";
import "../note.css";

function NoteArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
    }

    function AddNote(event){
        props.onAdd(note);
        event.preventDefault();
    }

    return (
        <div> 
            <form>
                <input onChange={handleChange} value={note.title} name="title" placeholder="Title"/>
                <textarea onChange={handleChange} value={note.content} name="content" placeholder="Create a note ..."/>
                <button onClick={AddNote} className='addButton'>Add</button>
            </form>
        </div>
    );
}

export default NoteArea;