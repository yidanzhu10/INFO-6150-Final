import React from "react";  
import {Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

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
                <Button href="#">
                    <FontAwesomeIcon icon="fa-solid fa-file-lines" /> 
                    <p>Dashboard</p>
                </Button>
            </Col>
            <Col className="directory">
                <Button onClick={toNote}>
                    <FontAwesomeIcon icon="fa-solid fa-notes" />
                    <p>Note</p>
                </Button>
            </Col>
            <Col className="directory">
                <Button onClick={toTodo}>
                    <FontAwesomeIcon icon="fa-solid fa-list-check" />
                    <p>To-Do</p>
                </Button>
            </Col>
        </div>
    );
}

export default Directory;