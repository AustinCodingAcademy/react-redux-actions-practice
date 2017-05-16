import ChangeTemperature from "../components/ChangeTemperature";
import {connect} from "react-redux";
import {setTemp} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function(value) {
      dispatch(setTemp(value));
    }
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);