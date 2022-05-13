// import React, {useState} from 'react';
// import '../Signup.css';
// import axios from 'axios';
// import swal from 'sweetalert';

// function Signup(){
//     const [username, setUsername] = useState({
//         fName: "",
//         lName: "",
//         email: "",
//         password:'',
//         repeatPassword:''
//     });



//     function typeChange(event){
//         const {name, value} = event.target;
//         setUsername((preValue) => {
//             return {
//                 ...preValue,
//                 [name]: value
//             };
//         });
//     }

//     function handleClick(event){

//         var valEmail = /([\w.]+)@([\w.]+)\.(\w+)/;
//         var valPwd = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/;

//         event.preventDefault();
//         let users = fetch("http://localhost:3001/users/users")
//         .then(res => {
//             if (res.ok) {
//                 return res.json()
//             }
//         }).then(users => {
//             let flag = true;
//             users.find((item) => {
//                 if (item.email == username.email) {
//                     flag = false;
//                 }
//             });
//             if (!flag) {
//                 swal({
//                     title: "Error",
//                     text: "Email is duplicated!\n" + 
//                             "Please change to another one.",
//                     icon: "error",
//                 });
//                 return false;
//             }
//             if (!username.email.match(valEmail)) {
//                 swal({
//                     title: "Error",
//                     text: "Invalid Email format, please re-enter!",
//                     icon: "error",
//                   });
//             } else if (!username.password.match(valPwd)) {
//                         swal({
//                             title: "Error",
//                             text: "Invalid Password!\n" +
//                             "At least 8 digits\n" +
//                             "Must contain 1 number\n" +
//                             "Must contain 1 lowercase letters\n" +
//                             "Must contain 1 uppercase letters\n" +
//                             "Must contain 1 special character\n",
//                             icon: "error",
//                           });
//             } else if (username.password != username.repeatPassword) {
//                 swal({
//                     title: "error",
//                     text: "Repeat Password is not same as password!",
//                     icon: "warning",
//                   });
//             } else {
//                 const newUser={

//                     firstname: username.fName,
//                     lastname:username.lName,
//                     email:username.email,
//                     password:username.password,
//                     notelist:[]
//                 };
//                 axios.post('http://localhost:3001/users/create',newUser);
//                 swal({
//                     title: "Congratulations",
//                     text: "Welcome to Husky Note!",
//                     icon: "success",
//                   });
//                 return ; 
//                     // history.push("/component/main")


//             }
//         });
//     }



//     return(
//         <div className='container'>
//             <h1>Hello {username.fName} {username.lName}</h1>
//             <p>{username.email}</p>
//             <form>
//                 <input onChange={typeChange} name="fName" value={username.fName} placeholder="First Name"/>
//                 <input onChange={typeChange} name="lName" value={username.lName} placeholder="Last Name"/>
//                 <input onChange={typeChange} name="email" value={username.email} placeholder="Email"/>
//                 <input onChange={typeChange} name="password" value={username.password} placeholder="Password"/>
//                 <input onChange={typeChange} name="repeatPassword" value={username.repeatPassword} placeholder="Confirm Password"/>
//                 <button onClick={handleClick}>Sign Up</button>
//             </form>
//         </div>
//     );
// }

// export default Signup;


//from Yidan
import React, { useState } from "react";
import "../../index.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Signup() {
  const [username, setUsername] = useState({
    // fName: "",
    // lName: "",
    // email: ""
    fName: "",
    lName: "",
    email: "",
    password: '',
    repeatPassword: ''
  });

  let navigate = useNavigate();

  function typeChange(event) {
    const { name, value } = event.target;
    setUsername((preValue) => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {

    var valEmail = /([\w.]+)@([\w.]+)\.(\w+)/;
    // var valPwd = /^.*(?=.{8,}).*$/;
    var valPwd = /^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?\(\)]).*$/;

    event.preventDefault();
    let users = fetch("http://localhost:3001/users/users")
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      }).then(users => {
        let flag = true;
        users.find((item) => {
          if (item.email == username.email) {
            flag = false;
          }
        });
        if (!flag) {
          swal({
            title: "Error",
            text: "Email is duplicated!\n" +
              "Please change to another one.",
            icon: "error",
          });
          return false;
        }
        if (!username.email.match(valEmail)) {
          swal({
            title: "Error",
            text: "Invalid Email format, please re-enter!",
            icon: "error",
          });
        } else if (!username.password.match(valPwd)) {
          swal({
            title: "Error",
            text: "Invalid Password!\n" +
              "At least 8 digits\n" +
              "Must contain 1 number\n" +
              "Must contain 1 lowercase letters\n" +
              "Must contain 1 uppercase letters\n" +
              "Must contain 1 special character\n" +
              username.password
              ,
            icon: "error",
          });
        } else if (username.password != username.repeatPassword) {
          swal({
            title: "error",
            text: "Repeat Password is not same as password!",
            icon: "warning",
          });
        } else {
          const newUser = {

            firstname: username.fName,
            lastname: username.lName,
            email: username.email,
            password: username.password,
            notelist: [],
            todolist: []
          };
          axios.post('http://localhost:3001/users/create', newUser);
          swal({
            title: "Congratulations",
            text: "Welcome to Husky Note!",
            icon: "success",
          });
          
          // history.push("/component/main")
          navigate("/login");
          return;

        }
      });
  }





  return (
    <div className="signUpContainer">
      <h1>
        Hello {username.fName} {username.lName}
      </h1>
      <p>{username.email}</p >
      <form className="signupForm">
        <input
          className="signupInput"
          onChange={typeChange}
          name="fName"
          value={username.fName}
          placeholder="First Name"
        />
        <input
          className="signupInput"
          onChange={typeChange}
          name="lName"
          value={username.lName}
          placeholder="Last Name"
        />
        <input
          className="signupInput"
          onChange={typeChange}
          name="email"
          value={username.email}
          placeholder="Email"
        />
        <input className="signupInput" placeholder="Password" name="password" onChange={typeChange} value={username.password}/>
        <input className="signupInput" placeholder="Conform Password" name="repeatPassword" onChange={typeChange} value={username.repeatPassword} />
        <button className="signUpButton" onClick={handleClick}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;