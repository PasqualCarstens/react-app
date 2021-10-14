import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <span className="temperature" id="temperature">
        12
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
