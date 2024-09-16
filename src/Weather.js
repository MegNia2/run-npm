import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in London is ${response.data.main.temp}`);
  }

  let apiKey = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=aa09763d916df0424c840d55bfc2d2c9&units=metric`;
  axios.get(apiKey).then(handleResponse);
  return (
    <div>
      <h2>Weather from React</h2>
      <p>Hello</p>
    </div>
  );
}
