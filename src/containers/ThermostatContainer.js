import React from 'react';
import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

//map a prop called text to the state specialText
function mapStateToProps(state){
 return{
   temp:state.currentTemp
 }
}

const ThermostatContainer= connect(
 mapStateToProps
)(Thermostat);
export default ThermostatContainer;
