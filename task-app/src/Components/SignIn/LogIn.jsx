// from Yidan
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../index.css";
import swal from 'sweetalert';
import styled from 'styled-components';
// eslint-disable-next-line
import axios from 'axios';


function Login() {
    // eslint-disable-next-line
    const [email, setEmail] = useState("");
    const [useremail, setUserEmail] = useState({
        email: "",
        password: ''
    });

    let navigate = useNavigate();

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
        // eslint-disable-next-line
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
                    if (item.email === useremail.email) {
                        flag = false;
                        console.log(flag);
                        if (item.password === useremail.password) {
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
            <Email>{useremail.email}</Email>
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

const Email = styled.p`
    font-family: 'Source Sans Pro';
    color: white;
    font-weight: 200;
    padding-top: 2%;
    padding-bottom: 2%;
`;

export default Login;