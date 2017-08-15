import React from "react";
import DonutChart from "./ignore/DonutChart";



// this function shows the DonutChart = state.currentTemp
function Thermostat(props){
  console.log(props.temp);
  return (<DonutChart value={props.temp || 23 } />)
}

export default Thermostat;
