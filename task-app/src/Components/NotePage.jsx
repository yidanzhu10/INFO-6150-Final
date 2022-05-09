import React, { useEffect, useState } from "react";
import NoteHeader from "./NoteHeader";
import NoteArea from "./NoteArea";
import Note from "./Note";
import axios from "axios";

import "../note.css";

function NotePage(){
    const [notes, setNotes] = useState([]);
    const [currentEmail, setCurrentEmail] = useState("");

    
    // if(sessionStorage.getItem("email") == null) {
    //     setCurrentEmail(sessionStorage.getItem("email"));
    // }
    useEffect( () => {
        setCurrentEmail(sessionStorage.getItem("email"));
        retrieveNote();
        console.log("first loaded");
        console.log(notes);
    }, [])
    

    
    function addToNote(newNote){
        
        let newlist = [...notes, newNote];
        // setNotes((preNotes) => {
        //     console.log("setnotes");
        //     console.log([...preNotes, newNote]);
        //     return ;
        // });
        
        console.log("new note is " + newNote.title);
        console.log(notes);
        const newNotes={
  
            email:currentEmail,
            notelist: newlist
        };
        axios.post('http://localhost:3001/users/update',newNotes);
        // retrieveNote();
        setNotes(newlist);
        return ; 

    }





    function retrieveNote() {
        
        let users = fetch("http://localhost:3001/users/users")
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(users => {
            let flag = true;
            users.find((item) => {
                
               
                if (item.email == currentEmail) {
                    console.log("current user is " + currentEmail);
                    setNotes(item.notelist);
                    console.log(item.notelist);
                    return;
                } 
            });
            
            
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