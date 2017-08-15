import {increaseCounter, decreaseCounter} from "../actions";
import {connect} from "react-redux";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch) {
  return {
    increase: function() {
      var action = increaseCounter();
      dispatch(action);
    },
    decrease: function() {
      var action2 = decreaseCounter();
      dispatch(action2);
    }
  }
}

var otherFunction = connect(null, mapDispatchToProps);
var CounterButtonContainer = otherFunction(CounterButton)

export default CounterButtonContainer;

//Single Line
// export default connect(null,mapDispatchToProps)(CounterButton);
