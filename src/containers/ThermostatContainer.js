import {setTemp} from "../actions";
import {connect} from "react-redux";
import Thermostat from "../components/Thermostat";

function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

//This is the shorter way to export:
//export default connect (mapStateToProps)(Thermostat)

let otherFunction = connect(mapStateToProps);
let ThermostatContainer = otherFunction(Thermostat);
export default ThermostatContainer;
