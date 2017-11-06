import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch){
  return {
   set:function(temp){
     let action = setTemp(temp);
     dispatch(action);
   }
  }
}

var label = connect(mapDispatchToProps);
var ChangeTemperatureContainer = label(ChangeTemperature);
export default ChangeTemperatureContainer;
