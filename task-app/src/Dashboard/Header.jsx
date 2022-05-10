import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    var time = new Date().getHours();
    var timeOfDay;
    if(time < 12){
        timeOfDay = "Morning";
    } else if(time >= 12 && time < 18){
        timeOfDay = "Afternoon";
    } else {
        timeOfDay = "Evening";
    }

    return (
        <div>
            <section className="banner">
                <Container fluid="true">
                    <Row>
                        <Col>
                            <p> {timeOfDay} </p>
                        </Col>
                        <Col>
                            <p>Good {timeOfDay}, Husky!</p>
                        </Col>
                    </Row>
                </Container>     
            </section>
        </div>
    );
}

export default Header;