import React, {useState} from 'react';
import '../Signup.css';

function Signup(){
    const [username, setUsername] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function typeChange(event){
        const {name, value} = event.target;
        setUsername((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        });
    }

    return(
        <div className='container'>
            <h1>Hello {username.fName} {username.lName}</h1>
            <p>{username.email}</p>
            <form>
                <input onChange={typeChange} name="fName" value={username.fName} placeholder="First Name"/>
                <input onChange={typeChange} name="lName" value={username.lName} placeholder="Last Name"/>
                <input onChange={typeChange} name="email" value={username.email} placeholder="Email"/>
                <input placeholder="Password"/>
                <input placeholder="Conform Password"/>
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;