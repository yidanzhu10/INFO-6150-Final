import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../index.css";
import {Container, Row, Col} from 'react-bootstrap';

function Weather() {
    // eslint-disable-next-line
    const [data, setData] = useState({}); 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=6ca60f44f0359b08c91c9c5edf228a23`

    function getWeather() {
        fetch(url)
          .then(function (res) {
            console.log(res);
            return res.json();
          })
          .then(function (myJson) {
            console.log(myJson);
            setData(myJson);
          });
    }

    useEffect(() => {
    getWeather();
    }, []);
  
    return (
        <div className="weather">
        <Container className="search">
            <Row>
                <Col>
                    <div>
                        {data.name? <h1 className="cityName">{data.name}</h1>: <h1 className="cityName">Boston</h1>}
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="middle">
                <Col className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : <h1>75°F</h1>}
                </Col>
                <Col className="icon">
                    {data.weather ? <p className="weatherDescription">{data.weather[0].description}</p > : <p className="weatherDescription">Weather Description</p >}
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="bottom">
                <Col className="feels">
                    {data.main ? <p className='descriptionCategory'>{data.main.feels_like.toFixed()}°F</p > : <p className="preset">Feels Good</p >}
                    <p className='weatherCategory'>Feels Like</p >
                </Col>
                <Col className="humidity">
                    {data.main ? <p className='descriptionCategory'>{data.main.humidity}%</p > : <p className="preset">Just Right</p >}
                    <p className='weatherCategory'>Humidity</p >
                </Col>
                <Col className="wind">
                    {data.wind ? <p className='descriptionCategory'>{data.wind.speed.toFixed()} MPH</p > : <p className="preset">Breeze</p >}
                    <p className='weatherCategory'>Wind Speed</p >
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Weather;