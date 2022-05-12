import React from "react";
import {Col, Row} from 'react-bootstrap';
import Weather from "./Weather";

function Feed(){
    return (
        <div>
            <Col fluid>
                <Row>
                    <Col>
                        <Weather />
                    </Col>
                </Row>
            </Col>
        </div>
    );
}

export default Feed;