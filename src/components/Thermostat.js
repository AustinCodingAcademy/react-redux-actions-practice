import React from "react";
import DonutChart from "./ignore/DonutChart";
import { connect } from "react-redux";

function Thermostat(props){
  return (<DonutChart value={props.temp || 23 } />)
}

export default Thermostat;
