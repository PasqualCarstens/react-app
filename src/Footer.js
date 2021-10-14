import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <i className="fab fa-github github-icon"></i>
        <a
          href="https://github.com/PasqualCarstens/vanilla-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>{" "}
        by Pasqual Carstens
      </footer>
    </div>
  );
}
