import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat.js";

function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(Thermostat);