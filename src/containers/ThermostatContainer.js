import { connect } from "react-redux"
import Thermostat from '../components/Thermostat'

const msp =(state)=>{return{temp:state.currentTemp}}

const ThermostatContainer = connect(msp)(Thermostat)

export default ThermostatContainer;