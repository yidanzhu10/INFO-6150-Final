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
import React, { useState } from "react";
import "../../index.css";
import {Container, Row, Col} from 'react-bootstrap';

function Weather() {
    // eslint-disable-next-line
    const [data, setData] = useState({}); 
    const [location, setLocation] = useState("");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=6ca60f44f0359b08c91c9c5edf228a23`
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=6ca60f44f0359b08c91c9c5edf228a23`;

    const searchLocation = (event) => {
        if (event.key === "Enter") {
        axios.get(url).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
        setLocation("");
        }
    };

    return (
        <div className="weather">
        <Container className="search">
            <Row>
                <Col>
                    <input
                        className="locationInput"
                        value={location}
                        type="text"
                        onChange={(event) => searchLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter Location"
                    />
                </Col>
                <Col>
                    <div className="cityName">
                        {data.name? <p>{data.name}</p>: <h2>Boston</h2>}
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col className="temp">
                    {/* <h1>65 °F</h1> */}
                    {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : <p>75°F</p>}
                </Col>
                <Col className="icon">
                    {/* <p>clouds</p> */}
                    {data.weather ? <p>{data.weather[0].icon}</p> : <p>icon</p>}
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col className="feels">
                    {data.main ? <p className='descriptionCategory'>{data.main.feels_like.toFixed()}°F</p> : null}
                    <p>Feels Like</p>
                </Col>
                <Col className="humidity">
                    {data.main ? <p className='descriptionCategory'>{data.main.humidity}%</p> : null}
                    <p>Humidity</p>
                </Col>
                <Col className="wind">
                    {data.wind ? <p className='descriptionCategory'>{data.wind.speed.toFixed()} MPH</p> : null}
                    <p>Wind Speed</p>
                </Col>
            </Row>
        </Container>
        <div className="container">
            <div className="top">
            {/* <div className="location">
                <p>Boston</p>
            </div> */}
            <div className="temp">
                
            </div>
            <div className="description">
                
            </div>
            </div>
            <div className="bottom">
            <div className="feels">
                {/* <p className="bold">70 °F</p> */}
                {/* {data.main ? <p className='descriptionCategory'>{data.main.feels_like.toFixed()}°F</p> : null}
                <p>Feels Like</p> */}
            </div>
            <div className="humidity">
                {/* <p className="bold">20%</p> */}
                {/* {data.main ? <p className='descriptionCategory'>{data.main.humidity}%</p> : null}
                <p>Humidity</p> */}
            </div>
            <div className="wind">
                {/* <p className="bold">12 MPH</p> */}
                {/* {data.wind ? <p className='descriptionCategory'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p> */}
            </div>
            </div>
        </div>
        </div>
    );
}

export default Weather;