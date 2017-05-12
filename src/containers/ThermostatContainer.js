import { connect } from 'react-redux';
import { setCurrentTemp } from "../actions";
import Thermostat from "../components/Thermostat";


function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     setTemp:function(temp){
//       let action = setTemp(temp);
//       dispatch(action);
//     }
//   };
// }

const ThermostatContainer = connect(mapStateToProps)(Thermostat);
export default ThermostatContainer;
