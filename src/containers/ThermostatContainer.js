import { connect } from "react-redux";
import Thermostat from "../components/Thermostat"

function mapStateToProps(state){
  return{
    temp:state.currentTemp
  }
}

const ThermostatContainer = connect(mapStateToProps)(Thermostat);
export default ThermostatContainer
