import {connect} from "react-redux";
import Thermostat from "./Thermostat";

const mapStateToProps = state => {
  return {
    currentTemp: state.currentTemp
  };
};

const ThermostatContainer = connect(
  mapStateToProps
)(Thermostat);

export default ThermostatContainer;
