import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherDetail } from './feature/weather/WeatherDetail';
import { WeatherLocationInput } from './feature/weather/WeatherLocationInput';

function App() {
  return (
    <div className="App">
      <WeatherLocationInput />
      <WeatherDetail />
    </div>
  );
}

export default App;
