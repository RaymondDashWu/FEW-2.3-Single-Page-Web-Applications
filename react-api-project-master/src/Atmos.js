import React from 'react';

// Creates a description of the weather in Weather.js
function Atmos({ pressure, humidity }) { 
    if (pressure) {
        return <div className="Press">Pressure: {pressure}</div>;
    } else {
        return <div className="Humid">Humidity: {humidity}</div>;
    }

}

export default Atmos;