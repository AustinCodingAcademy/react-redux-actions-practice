import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

function mapStateToProps(state){
  return {
    currentTemp: state.currentTemp
  }
}

export default connect(mapStateToProps)(Thermostat);
