// import React, { useEffect, useState } from "react";
// import NoteHeader from "./NoteHeader";
// import NoteArea from "./NoteArea";
// import Note from "./Note";
// import axios from "axios";

// import swal from "sweetalert";
// import '../note.css';
// import Footer from "../Footer";
// import BackButton from "../BackButton";

// function NotePage(){
//     const [notes, setNotes] = useState([]);
//     const [currentEmail, setCurrentEmail] = useState("");



//     const deleteTask = (key) => {

//         // you need to remove element from array and do setNotes() without that element;


//     }

    
//     // if(sessionStorage.getItem("email") == null) {
//     //     setCurrentEmail(sessionStorage.getItem("email"));
//     // }
//     useEffect( () => {
//         console.log(sessionStorage.getItem("email"));
//         setCurrentEmail(sessionStorage.getItem("email"));
//         console.log(currentEmail + " currentEmail");
//         retrieveNote();
//         console.log(currentEmail + " after retrieve");
//         console.log("first loaded");
//         console.log(notes);
//     }, [])

//     useEffect(() => {

//         console.log(currentEmail + " currentEmail in node");
//         retrieveNote();

//     },[currentEmail])
    

    
//     function addToNote(newNote){
        
//         let newlist = [...notes, newNote];
//         // setNotes((preNotes) => {
//         //     console.log("setnotes");
//         //     console.log([...preNotes, newNote]);
//         //     return ;
//         // });
        
//         console.log("new note is " + newNote.title);
//         console.log(notes);
//         const newNotes={
  
//             email:currentEmail,
//             notelist: newlist
//         };
//         axios.post('http://localhost:3001/users/update',newNotes);
//         // retrieveNote();
//         setNotes(newlist);
//         return ; 

//     }

//     function retrieveNote() {
        
//         let users = fetch("http://localhost:3001/users/users")
//         .then(res => {
//             if (res.ok) {
//                 return res.json()
//             }
//         }).then(users => {
            
            
//             console.log("Current user is " + currentEmail);
//             users.find((item) => {
//                 console.log(item.email);
//                 console.log(currentEmail);
//                 if (item.email == currentEmail) {
                    
//                     setNotes(item.notelist);
//                     console.log()
//                     return;
//                 } 
//             });
           
              
            
//         });
//     }

    

//     return (
//         <div>
//             <NoteHeader />
//             <BackButton style={{marginTop:"1%"}}/>
//             <NoteArea onAdd={addToNote} />
//             {notes.map((item) => {
//                 return <Note title={item.title} content={item.content} id={item.id} deleteNote={deleteTask} />;
//             })}
//             {/* <Note key={1} title="Note Title" content="Note content" /> */}
//             <br />
//             <div style={{marginTop:"25%"}}>
//                 <Footer />
//             </div>
//         </div>
//     );

    



// }

// export default NotePage;




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
import swal from "sweetalert"; 

function NotePage() {
  const [notes, setNotes] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("");

  function addToNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }

useEffect( () => {
    console.log(sessionStorage.getItem("email"));
    setCurrentEmail(sessionStorage.getItem("email"));
    console.log(currentEmail + " currentEmail");
    retrieveNote();
    console.log(currentEmail + " after retrieve");
    console.log("first loaded");
    console.log(notes);
}, [])

useEffect(() => {

    console.log(currentEmail + " currentEmail in node");
    retrieveNote();

},[currentEmail])



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

  return (
    <div className="notePage">
      <NoteHeader />
      <NoteArea onAdd={addToNote} />
        {notes.map((item) => {
          return (<Note title={item.title} content={item.content} />);
        })}
        <Note key={1} title="Note Title" content="Note content" />

      
        <Footer1>
          <BackButton />
          <Copyright>© Copyright 2022 Husky Mavericks </Copyright>
        </Footer1>
      
      
    </div>
  );
}

const Footer1 = styled.div`
  ${'' /* margin-top: 25%; */}
  margin-top: -35%;
  height: 5%;
  position: relative;
  clear: both;
`;

const Copyright = styled.div`
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  color: grey;
  padding-top: 5%;
  padding-bottom: 100%;
  text-align: center;
`;

export default NotePage;