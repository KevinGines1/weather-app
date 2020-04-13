import React from 'react';
import WeatherCard from './components/WeatherCard/component.js';
import './App.css';
function App() {
  return (
    <div className="App">
     <WeatherCard temp={-15} condition="Clear" city="Sidney" country="AU"/>
     <WeatherCard temp={-20} condition="Dust" city="Melbourne" country="AU"/>
     <WeatherCard temp={-1} condition="Tornado" city="London" country="GB"/>
    </div>
  );
}

export default App;
