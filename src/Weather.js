import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setResult(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bd7a034b868c09bf6a301a41181ce82e`;
    axios.get(url).then(displayWeather);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={changeCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (result) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <br />
          <li>Description: {weather.description}</li>
          <br />
          <li>Humidity: {weather.humidity}%</li>
          <br />
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
