import Thermostat from "../components/Thermostat";
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {temp: state.currentTemp
  }
}

// you need both of these to make this work
const ThermostatContainer = connect(mapStateToProps)(Thermostat);
export default ThermostatContainer
