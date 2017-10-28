//Import connect from react-redux
//import appropriate component: Thermostat
import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";

//map a prop called temp to the state
function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

// Call connect function
export default connect(mapStateToProps)(Thermostat);
