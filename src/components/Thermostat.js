import React from "react";
import DonutChart from "./ignore/DonutChart";
import { connect } from "react-redux"

function Thermostat(props){
  return (<DonutChart value={props.temp || 23 } />)
}

const msp =(state)=>{return{temp:state.currentTemp}}

const ThermostatContainer = connect(msp)(Thermostat)

export default ThermostatContainer;