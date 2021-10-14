import "./styles.css";
import React from "react";
import Form from "./Form";
import Footer from "./Footer";
import City from "./City";
import Infromation from "./Information";
import Temperature from "./Temperature";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form />
            <div className="row">
              <div className="col-6">
                <City />
                <Infromation />
              </div>
              <div className="col-6">
                <div className="clearfix weather-temperature">
                  <div className="float-end">
                    <Temperature />
                  </div>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default App;
