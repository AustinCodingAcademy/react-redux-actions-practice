import Thermostat from '../components/Thermostat';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(Thermostat);
