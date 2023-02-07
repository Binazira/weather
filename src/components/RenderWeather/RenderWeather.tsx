import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { WeatherType } from "../Weather/Weather";
import "./RenderWeather.scss";

interface RenderWeatherProps {
  dataWeather: WeatherType;
  cityName: string;
}

const RenderWeather = ({ dataWeather, cityName }: RenderWeatherProps) => {
  // console.log("RenderWeather", dataWeather);
  // console.log("RenderWeather", dataWeather.current?.temp_c);
  let temp = dataWeather.current?.temp_c;
  console.log(typeof temp, "temp");
  let min;
  let max;

  if (temp) {
    min = temp - 1;
    max = temp + 2;
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className="forecast">
        <Typography variant="h5" component="div">
          {dataWeather.location?.country} : {dataWeather.location?.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperature: <span>{dataWeather.current?.temp_c}</span>
        </Typography>
        <div className="forecast__tempAround">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Min: {min}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Max: {max}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Feels like: {dataWeather.current?.feelslike_c}
          </Typography>
        </div>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Wind: {dataWeather.current?.wind_mph}
        </Typography>
        <Typography
          className="forecast__description"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          <img src={dataWeather.current?.condition?.icon} alt="weather-icon" />
          {dataWeather.current?.condition?.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RenderWeather;
