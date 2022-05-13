import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Directory from "./Directory";
// import Feed from "./Feed";
// import Copyright from '../Footer';
import styled from "styled-components";
import Weather from "./Weather";
import {Container, Row, Col} from 'react-bootstrap';

function Dashboard(){
    return(
        <div>
            <Header />
            <Container fluid={true} className="directoryContainer">
                <Row md='3' className="dash">
                    <Col className="directoryCol">
                        <Directory />
                    </Col>
                    <Col>
                        <Weather />
                    </Col>
                </Row>
            </Container>
            <Cr>© Copyright 2022 Husky Mavericks</Cr>;
        </div>
    );
}

const Cr = styled.p`
    color:grey;
    font-family: 'montserrat', sans-serif;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 100%;
`;

export default Dashboard;