import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=00115a01041b96ec273805caa85e54d7`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        // console.log({ ...res.data });
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          type="text"
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter the location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description ">
            {data.weather ? <h1>{data.weather[0].description}</h1> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              <p className="bold">
                {data.main ? (
                  <p className="bold">{data.main.feels_like}°F</p>
                ) : null}
                {/* {data.main.feels_like}°F */}
              </p>
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">
                {data.main ? <p> {data.main.humidity}%</p> : null}
              </p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">
                {data.wind ? <p> {data.wind.speed}Mph</p> : null}
              </p>
              <p>Winds</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

//00115a01041b96ec273805caa85e54d7
