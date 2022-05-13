import React from "react";
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import '../../index.css';

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

    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };


    return (
        <div>
            <section>
                <Container fluid="true">
                    <Row  className="banner">
                        <Col md='3' className="logoContainer">
                            < img className="logo" src={logo} alt="Logo"></img>
                        </Col>
                        <Col className="greetingRow" md='6'>
                            <h3 className="greeting">Good {timeOfDay}, Husky!</h3>
                            <h5 >It's {new Date().toLocaleDateString("en-US", options)}</h5>
                        </Col>
                    </Row>
                </Container>     
            </section>
        </div>
    );
}

export default Header;