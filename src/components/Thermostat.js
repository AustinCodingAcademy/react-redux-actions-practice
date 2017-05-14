import React from "react";
import DonutChart from "./ignore/DonutChart";

function Thermostat(props){
  return (<DonutChart value={props.temp || 0 } />)
}

export default Thermostat;
