import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

//map a prop called text to the state specialText
function mapStateToProps(state){
  console.log("Temperature: " + state.currentTemp);

  return {
    temp: state.currentTemp
  }
}

export default connect(mapStateToProps)(Thermostat);
