import React from "react";
import DonutChart from "./ignore/DonutChart";

function Thermostat(props) {
  return (<DonutChart value={props.temp || 20} />)
}

export default Thermostat;
