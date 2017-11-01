import { connect } from 'react-redux';
import {setCurrentUser} from "../actions";
import Thermostat from "../components/Thermostat";


function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(Thermostat);
