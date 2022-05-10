import React from 'react';
import "../footer.css";
import { useNavigate } from 'react-router-dom';

function BackButton(){

    var navigate = useNavigate();

    function toDash(event){
        
        event.preventDefault();
        navigate("/dashboard");

    }

    return (
        <div className='back'>
            <button onClick={toDash} className='backButton'>
                Go Back To DashBoard
            </button>
        </div>
    );
}

export default BackButton;