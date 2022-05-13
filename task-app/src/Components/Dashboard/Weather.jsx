// import React, { useState } from "react";
// import axios from "axios";
// import '../../index.css';

// function Weather(){
//     const [data, setData] = useState({});
//     const [location, setLocation] = useState('');

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=$boston&units=imperial&appid=6ca60f44f0359b08c91c9c5edf228a23`

//     const searchLocation = (event) => {
//         if (event.key === 'Enter') {
//             axios.get(url).then((response) => {
//                 setData(response.data)
//                 console.log(response.data)
//             })
//             setLocation('')
//         }
//     }

//     return(
//         <div className="weatherBox">
//             <div className="search">
//                 <input 
//                     className="location"
//                     value={location}
//                     onChange={event => setLocation(event.key.value)}
//                     onKeyPress={searchLocation}
//                     placeholder="Where Are You Today"
//                     type="text"
//                 />
//             </div>
//             <div className="weatherContaienr">
//                 <div className="top">
//                     <div className="location">
//                         {/* <p className="cityName">{data.name}</p> */}
//                         <p>Boston</p>
//                     </div>
//                     <div class="temp">
//                         {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}   
//                     </div>
//                     <div className="description">
//                         {data.weather ? <p>{data.weather[0].main}</p> : null}
//                     </div>
//                 </div>

//                 {data.name !== undefined &&
//                     <div className="bottom">
//                         <div className="feels">
//                             {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
//                             <p className="descriptionCategory">Feels Like</p>
//                         </div>
//                         <div className="humidity">
//                             {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
//                             <p className="descriptionCategory">Humidity</p>
//                         </div>
//                         <div className="wind">
//                             {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
//                             <p className="descriptionCategory">Wind Speed</p>
//                         </div>
//                     </div>
//                 }
//             </div>
//         </div>
//     );
// }  


import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../index.css";
import {Container, Row, Col} from 'react-bootstrap';

function Weather() {
    // eslint-disable-next-line
    const [data, setData] = useState({}); 
    // const [location, setLocation] = useState("");

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=6ca60f44f0359b08c91c9c5edf228a23`

    // const searchLocation = (event) => {
    //     if (event.key === "Enter") {
    //     axios.get(url).then((res) => {
    //         setData(res.data);
    //         console.log(res.data);
    //     });
    //     setLocation("");
    //     }
    // };

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
                {/* <Col>
                    <input
                        className="locationInput"
                        value={location}
                        onChange={(event) => searchLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter Location"
                        type="text"
                    />
                </Col> */}
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
                    {/* <h1>65 °F</h1> */}
                    {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : <h1>75°F</h1>}
                </Col>
                <Col className="icon">
                    {/* <p>clouds</p> */}
                    {data.weather ? <p className="weatherDescription">{data.weather[0].description}</p> : <p className="weatherDescription">Weather Description</p>}
                    {/* {data.weather ? <img src={iconUrl}></img>: <img src={iconAlt}></img>} */}
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className="bottom">
                <Col className="feels">
                    {data.main ? <p className='descriptionCategory'>{data.main.feels_like.toFixed()}°F</p> : <p className="preset">Feels Good</p>}
                    <p className='weatherCategory'>Feels Like</p>
                </Col>
                <Col className="humidity">
                    {data.main ? <p className='descriptionCategory'>{data.main.humidity}%</p> : <p className="preset">Just Right</p>}
                    <p className='weatherCategory'>Humidity</p>
                </Col>
                <Col className="wind">
                    {data.wind ? <p className='descriptionCategory'>{data.wind.speed.toFixed()} MPH</p> : <p className="preset">Breeze</p>}
                    <p className='weatherCategory'>Wind Speed</p>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Weather;