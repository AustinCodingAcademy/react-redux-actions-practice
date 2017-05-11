import { connect } from 'react-redux';
import Thermostat from '../components/Thermostat';

function mapStateToProps(state){
  return {
    temp:state.currentTemp
  }
}

const ThermostatContainer = connect(mapStateToProps)(ThermostatContainer);

export default ThermostatContainer