import React, {useState} from 'react';
import '../Signup.css';

function Login(){
    const [email, setEmail] = useState("");
    
    function typeChange(event){
        const newValue = event.target.value;
        setEmail(newValue);
    }
    
    return (
        <div className='container'>
            <h1>Hello</h1>
            <p>{email}</p>
            <form>
                <input onChange={typeChange} name="email" value={email} placeholder="Email"/>
                <input placeholder="Password" />
                <button>Log In</button>
            </form>
        </div>
    );
}

export default Login;