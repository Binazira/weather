import axios from "axios";
import React, { useState } from "react";
import RenderWeather from "../RenderWeather/RenderWeather";
import WeatherInput from "../WeatherInput/WeatherInput";

const apiKey = "e39d4e6f266e4290b55144208230602";

const API = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

export interface WeatherType {
  current?: Current;
  location?: Location;
}
interface Current {
  feelslike_c?: number;
  temp_c?: number;
  wind_mph?: number;
  condition?: {
    icon?: string;
    text?: string;
  };
}
interface Location {
  country?: string;
  name?: string;
}

const Weather = () => {
  const [dataWeather, setDataWeather] = useState<WeatherType>({});
  const [cityName, setCityName] = useState<string>("");

  async function getWeather(inputValue: string) {
    try {
      const result = await axios(`${API}${inputValue}`);
      console.log(result.data);
      setDataWeather(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <WeatherInput getWeather={getWeather} setCityName={setCityName} />
      <RenderWeather dataWeather={dataWeather} cityName={cityName} />
    </div>
  );
};

export default Weather;
