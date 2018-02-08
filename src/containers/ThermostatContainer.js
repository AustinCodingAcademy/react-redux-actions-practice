import { connect } from 'react-redux';
import state from "../state";
import Thermostat from "../components/Thermostat";


function mapDispatchToProps(dispatch){
  return {
  temp: state.currentTemp
}

export default connect(mapStateToProps, null)(Thermostat);
