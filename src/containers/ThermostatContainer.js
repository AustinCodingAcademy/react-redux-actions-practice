import {connect} from "react-redux";
import Thermostat  from "../components/Thermostat";

const mapStateToProps = function (state) {
  return {
    temp: state.currentTemp
  };
};
const ThermostatContainer = connect(mapStateToProps)(Thermostat);

export default ThermostatContainer;