import React from "react";  
import {Col, Button} from 'react-bootstrap';
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
                <Button href="#">
                    <FontAwesomeIcon icon={faHome} /> 
                    <p>Dashboard</p>
                </Button>
            </Col>
            <Col className="directory">
                <Button onClick={toNote}>
                    <FontAwesomeIcon icon={faFileEdit} />
                    <p>Note</p>
                </Button>
            </Col>
            <Col className="directory">
                <Button onClick={toTodo}>
                    <FontAwesomeIcon icon={faTasks} />
                    <p>To-Do</p>
                </Button>
            </Col>
        </div>
    );
}

export default Directory;