import {connect} from "react-redux";
import Thermostat from "./Thermostat";

const mapStateToProps = state => {
  return {
    temp: state.currentTemp
  };
};

const ThermostatContainer = connect(
  mapStateToProps
)(Thermostat);

export default ThermostatContainer;
