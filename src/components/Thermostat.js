import React from 'react';
import DonutChart from "./ignore/DonutChart";

function Thermostat(props){
  return (
    <div>
      {console.log("Current Temp: ",props.temp)}
      <DonutChart value={props.temp || 23 } />
    </div>)
}

export default Thermostat;
