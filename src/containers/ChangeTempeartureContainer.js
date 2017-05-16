import { connect } from "react-redux";
import {setTemp} from "../actions";
import ChangeTemperature from "../components/ChangeTemperature.js";

function mapDispatchToProps(dispatch){
  return{
    set: function(temp){
      let action = setTemp(temp);
      dispatch(action);
    }
  }
}

const ChangeTemperatureContainer = connect(null, mapDispatchToProps)(ChangeTemperature);
export default ChangeTemperatureContainer
