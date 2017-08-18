import Thermostat from '../components/Thermostat';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    temp: state.temp
  }
}

export default connect(mapStateToProps)(Thermostat);

