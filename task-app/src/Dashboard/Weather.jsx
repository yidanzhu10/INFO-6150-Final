import React from 'react';
// import { useEffect, useState } from "react";
// import {Col, Row, Card} from 'react-bootstrap';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
require ('dotenv').config()

function Weather(){
    const key = process.env.REACT_APP_API_KEY;
    const url='api.openweathermap.org/data/2.5/weather?q=Boston&appid=${key}&units=imperial';
    // const[weather, setWeather] = useState("");

    console.log(url);

    const getData = () => {
        fetch(url)
        .then(function (res) {
            console.log(res);
            return res.json();
        })
        .then(function (myJson){
            console.log(myJson);
            setWeather(myJson);
        });
    };
    useEffect(() => {
        getData();
    },[]);

    const {data, isLoading, errorMessage} = useOpenWeather({
        key: process.env.REACT_APP_API_KEY,
        lang:'en',
        lon: '-71.0598',
        lat: '42.3584',
        unit: 'imperial'
    })

    return (
        <ReactWeather 
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel='Boston'
        />
    );
}

export default Weather;