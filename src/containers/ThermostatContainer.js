import { connect } from 'react-redux';
import ThermostatContainer from "../components/ThermostatContainer";

function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(ThermostatContainer);
