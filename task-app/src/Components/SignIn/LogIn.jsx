// import { useNavigate } from 'react-router-dom';
// import React, {useState} from 'react';
// import '../Signup.css';
// import swal from 'sweetalert';

// import axios from 'axios';

// function Login(){
//     const [useremail, setUserEmail] = useState({

//         email: "",
//         password:''

//     });

//     let navigate = useNavigate();

//     // function typeChange(event){
//     //     const newValue = event.target.value;
//     //     setUserEmail(newValue);
//     // }
//     function typeChange(event){
//         const {name, value} = event.target;
//         setUserEmail((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value
//             };
//         });
//     }



//     function handleClick(event) {
//         event.preventDefault();
//         let users = fetch("http://localhost:3001/users/users")
//         .then(res => {
//             if (res.ok) {
//                 return res.json()
//             }
//         }).then(users => {
//             let flag = true;
//             users.find((item) => {
//                 console.log(item.email);
//                 console.log(useremail.email);
//                 if (item.email == useremail.email) {
//                     flag = false;
//                     console.log(flag);
//                     if(item.password == useremail.password){
//                         sessionStorage.setItem("email", useremail.email);
//                         console.log("login email is " + sessionStorage.getItem("email"));
//                         swal({
//                             title: "Success",
//                             text: "Login Successful",
//                             icon: "success"
//                         });

//                         navigate("/dashboard");
//                         return ;
//                     }else{
//                         swal({
//                             title: "Error",
//                             text: "Wrong password.\n" + 
//                             "Please try again!",
//                             icon: "error"
//                         });
//                         return;
//                     }
//                 } 
//             });
//             console.log("final flag is " + flag);
//             if(flag) {
//                 swal({
//                     title: "Error",
//                     text: "Email not exists.\n" + 
//                     "Please sign up first!",
//                     icon: "error"
//                 });
//                 return;
//             }   

//         });
//     }

//     return (
//         <div className='container'>
//             <h1>Hello</h1>
//             <p>{useremail.email}</p>
//             <form>
//                 <input onChange={typeChange} name="email" value={useremail.email} placeholder="Email"/>
//                 <input  onChange={typeChange} name="password" value={useremail.password} placeholder="Password" />
//                 <button onClick={handleClick}>Log In</button>
//             </form>
//         </div>
//     );
// }

// export default Login;


// from Yidan
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../index.css";
import swal from 'sweetalert';

import axios from 'axios';


function Login() {
    const [email, setEmail] = useState("");

    const [useremail, setUserEmail] = useState({

        email: "",
        password: ''

    });

    //   function typeChange(event) {
    //     const newValue = event.target.value;
    //     setEmail(newValue);
    //   }
    let navigate = useNavigate();

    // function typeChange(event){
    //     const newValue = event.target.value;
    //     setUserEmail(newValue);
    // }
    function typeChange(event) {
        const { name, value } = event.target;
        setUserEmail((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
    }

    function handleClick(event) {
        event.preventDefault();
        let users = fetch("http://localhost:3001/users/users")
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(users => {
                let flag = true;
                users.find((item) => {
                    console.log(item.email);
                    console.log(useremail.email);
                    if (item.email == useremail.email) {
                        flag = false;
                        console.log(flag);
                        if (item.password == useremail.password) {
                            sessionStorage.setItem("email", useremail.email);
                            console.log("login email is " + sessionStorage.getItem("email"));
                            swal({
                                title: "Success",
                                text: "Login Successful",
                                icon: "success"
                            });

                            navigate("/dashboard");
                            return;
                        } else {
                            swal({
                                title: "Error",
                                text: "Wrong password.\n" +
                                    "Please try again!",
                                icon: "error"
                            });
                            return;
                        }
                    }
                });
                console.log("final flag is " + flag);
                if (flag) {
                    swal({
                        title: "Error",
                        text: "Email not exists.\n" +
                            "Please sign up first!",
                        icon: "error"
                    });
                    return;
                }

            });
    }

    return (
        <div className="signUpContainer">
            <h1>Hello</h1>
            <p>{useremail.email}</p >
            <form className="signupForm">
                <input
                    className="signupInput"
                    onChange={typeChange}
                    name="email"
                    value={useremail.email}
                    placeholder="Email"
                />
                <input onChange={typeChange} className="signupInput" name="password" placeholder="Password" value={useremail.password}/>
                <button className="signUpButton" onClick={handleClick}>Log In</button>
            </form>
        </div>
    );
}

export default Login;