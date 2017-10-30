import { connect } from 'react-redux';
import thermostat from "../components/thermostat";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(thermostat);