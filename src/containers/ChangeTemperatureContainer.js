import {connect} from "react-redux";
import ChangeTemperature from "../components/ChangeTemperature";
import {setTemp} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(){
      var action = setTemp();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ChangeTemperature);