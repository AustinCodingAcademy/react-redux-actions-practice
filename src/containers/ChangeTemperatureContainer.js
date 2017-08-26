import {setTemp} from "../actions";
import {connect} from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";

function mapDispatchToProps(dispatch){
  return {
    set: function(temp){
      let action = setTemp(temp)
      dispatch(action);
    }
  }
}

//This is the shorter way to export:
//export default connect (null,mapDispatchToProps)(ChangeTemperature)

let otherFunction = connect(null, mapDispatchToProps);
let ChangeTemperatureContainer = otherFunction(ChangeTemperature);
export default ChangeTemperatureContainer;
