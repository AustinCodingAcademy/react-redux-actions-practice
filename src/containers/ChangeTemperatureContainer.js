import ChangeTemperature from "../components/ChangeTemperature";
import { connect } from "react-redux";
import { setTemp } from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(temp){
      let action = setTemp(temp);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);
