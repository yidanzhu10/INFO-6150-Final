import React from "react";  
import {Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Directory(){
    return(
        <div>
            <Col className="directory">
                <Button href="#">
                    <FontAwesomeIcon icon="fa-solid fa-file-lines" /> 
                    <p>Dashboard</p>
                </Button>
            </Col>
            <Col className="directory">
            <Button>
                    <FontAwesomeIcon icon="fa-solid fa-notes" />
                    <p>Note</p>
                </Button>
            </Col>
            <Col className="directory">
                <Button>
                    <FontAwesomeIcon icon="fa-solid fa-list-check" />
                    <p>To-Do</p>
                </Button>
            </Col>
        </div>
    );
}

export default Directory;