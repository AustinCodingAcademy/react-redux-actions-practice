import {connect} from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";
import {setTemp} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function(temp) {
      var action = setTemp(temp);
      dispatch(action);
    },
  }
}

var otherFunction = connect(null, mapDispatchToProps);
var ChangeTemperatureContainer = otherFunction(ChangeTemperature)

export default ChangeTemperatureContainer;
