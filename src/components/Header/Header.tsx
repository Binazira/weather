import React from "react";
import "./Header.scss";
import weatherLogo from "../../assets/icons/weatherLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={weatherLogo} alt="weather-logo" />
      </div>
      <h2> WEATHER FORECAST</h2>
    </header>
  );
};

export default Header;
