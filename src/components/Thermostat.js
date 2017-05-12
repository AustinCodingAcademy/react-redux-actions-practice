import React from "react";
import DonutChart from "./ignore/DonutChart";
import {ThermostatContainer} from '../containers/ThermostatContainer';

function Thermostat(props){
  return (<DonutChart value={props.temp || 23 } />)
}

export default Thermostat;