import React, { Component } from 'react';

// Future TODO: implement detection for Celsius and auto change units. 
// Right now Fahrenheit hard coded

// Displays temperature in Weather.js
function Temp({ temp, modifier }) { 
    console.log("temp function temp", temp)
    const convertedTemp = (temp * 9/5 - 459.67).toFixed(0)
    console.log("convertedTemp", convertedTemp)
    // const convertedTemp = unit === 'f' ? temp : temp// calculate ...

    return <div className="temp">Temp {modifier} {convertedTemp} &deg;F</div>;
}

export default Temp;