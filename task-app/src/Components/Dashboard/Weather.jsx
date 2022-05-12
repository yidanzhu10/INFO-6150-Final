import React, { useEffect, useState } from "react";
import {Col, Row, Card} from 'react-bootstrap';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Weather(){
    const url="api.openweathermap.org/data/2.5/weather?q=Boston&appid=6ca60f44f0359b08c91c9c5edf228a23&units=imperial";
    const[weather, setWeather] = useState("");

    // const getData = () => {
    //     fetch(url)
    //     .then(function (res) {
    //         console.log(res);
    //         return res.json();
    //     })
    //     .then(function (myJson){
    //         console.log(myJson);
    //         setWeather(myJson);
    //     });
    // };
    // useEffect(() => {
    //     getData();
    // },[]);

    const {data, isLoading, errorMessage} = useOpenWeather({
        key: '6ca60f44f0359b08c91c9c5edf228a23',
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