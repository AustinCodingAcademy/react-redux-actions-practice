import { connect } from 'react-redux';
import Thermostat from "../components/Thermostat";



function mapStateToProps(dispatch){
    return {
        temp: state.currentTemp
     }
    }
  }


var label = connect(null, mapStateToProps);
var ThermostatContainer = label(Thermostat);
export default ThermostatContainer;

