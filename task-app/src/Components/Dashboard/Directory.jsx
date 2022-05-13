import React from "react";  
import {Col, Button, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {faHome, faFileEdit, faTasks} from '@fortawesome/free-solid-svg-icons';

function Directory(){

    var navigate = useNavigate();

    function toNote(event){
        event.preventDefault();
        navigate("/notepage");
    }

    function toTodo(event){        
        event.preventDefault();
        navigate("/todopage");
    }

    return(
        <div>
            
                <Col className="directory">
                    <Button href="#" className="dirButton">
                        <FontAwesomeIcon icon={faHome} size='3x' className="insideButton" /> 
                        <p className="directoryName">Dashboard</p>
                    </Button>
                </Col>
                <Col className="directory">
                    <Button onClick={toNote} className="dirButton">
                        <FontAwesomeIcon icon={faFileEdit} size='3x' className="insideButton"/>
                        <p className="directoryName">Note</p>
                    </Button>
                </Col>
                <Col className="directory">
                    <Button onClick={toTodo} className="dirButton">
                        <FontAwesomeIcon icon={faTasks} size='3x' className="insideButton"/>
                        <p className="directoryName">To-Do</p>
                    </Button>
                </Col>          
            
        </div>
    );
}

export default Directory;