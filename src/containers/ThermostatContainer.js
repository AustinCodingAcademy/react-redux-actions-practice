import { connect } from 'react-redux';
import { setTemp } from "../actions";
import Thermostat from "../components/Thermostat";

function mapStateToProps(state){
  return {
    temp: state.currentTemp
    //look at reducers
  }
}

export default connect(mapStateToProps)(Thermostat);