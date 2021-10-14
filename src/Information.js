import React from "react";
import "./Information.css";

export default function Information() {
  return (
    <div className="Information">
      <ul>
        <li id="date">Tuesday 15:45</li>
        <li id="description">Mostly Sunny</li>
        <li>
          Humidity: 93<span id="humidity" className="humidity"></span>
          <span className="percent">%</span>, Wind: 2
          <span id="wind" className="wind"></span>
          <span className="speed">km/h</span>
        </li>
      </ul>
    </div>
  );
}
