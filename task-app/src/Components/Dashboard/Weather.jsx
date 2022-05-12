import React, { useEffect, useState } from "react";
import {Col, Row, Card} from 'react-bootstrap';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Weather(){
    const key = process.env.OPEN_WEATHER_API_KEY;
    const url="api.openweathermap.org/data/2.5/weather?q=Boston&appid=" + key + "&units=imperial";
    const[weather, setWeather] = useState({});

    // console.log(process.env.OPEN_WEATHER_API_KEY);

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
    // });

    const {data, isLoading, errorMessage} = useOpenWeather({
        key: key,
        lang:'en',
        lon: '-71.0598',
        lat: '42.3584',
        unit: 'imperial'
    })

    

    return (
        <div>
            <ReactWeather 
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel='Boston'  
            />
            {/* <p>
                {weather.main.temp}
            </p> */}
        </div>
        
                  
    );
}

export default Weather;