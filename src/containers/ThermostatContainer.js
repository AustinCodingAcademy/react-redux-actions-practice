import { connect } from "react-redux"
import Thermostat from '../components/Thermostat'

const mapStatetoProps = (state) => {return {temp: state.currentTemp}}

const ThermostatContainer = connect(mapStatetoProps)(Thermostat)

export default ThermostatContainer;
