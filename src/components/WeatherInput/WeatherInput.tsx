import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

interface WeatherInputProps {
  getWeather: (str: string) => void;
}

const WeatherInput = ({ getWeather }: WeatherInputProps) => {
  const [input, setInput] = useState<string>("");

  function onSubmit() {
    getWeather(input);
  }
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "300px" },
        display: "flex",
        flexDirection: "column",
        padding: 3,
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      {/* <Stack spacing={2} direction="row"> */}
      <TextField
        id="outlined-basic"
        label="Введите название города"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" size="large" onClick={onSubmit}>
        Искать
      </Button>
      {/* </Stack> */}
    </Box>
  );
};

export default WeatherInput;
