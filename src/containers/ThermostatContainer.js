import { connect } from "react-redux";
import Thermostat from "../components/Thermostat";

// map temp to currentTemp
function mapStateToProps(state) {
  return {
    temp: state.currentTemp
  }
}

// export and connect MSTP and Thermostat
export default connect(mapStateToProps)(Thermostat);
