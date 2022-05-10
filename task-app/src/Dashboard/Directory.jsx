import React from "react";  
import {Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboard, faTasks} from '@fortawesome/free-solid-svg-icons';


function Directory(){
    return(
        <div>
            <Col className="directory">
                <Button href="#">
                    <FontAwesomeIcon icon={faHome} />
                    <p>Dashboard</p>
                </Button>
            </Col>
            <Col className="directory">
            <Button>
                    <FontAwesomeIcon icon={faClipboard} />
                    <p>Note</p>
                </Button>
            </Col>
            <Col className="directory">
                <Button>
                    <FontAwesomeIcon icon={faTasks} />
                    <p>To-Do</p>
                </Button>
            </Col>
        </div>
    );
}

export default Directory;