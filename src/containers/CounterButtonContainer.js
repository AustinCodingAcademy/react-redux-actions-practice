import {increaseCounter, decreaseCounter} from "../actions";
import {connect} from "react-redux";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch) {
  return{
    increase: function(){
      let action = increaseCounter();
      dispatch(action);
    },
    decrease: function(){
      let action = decreaseCounter();
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(CounterButton)

let otherFunction = connect(null, mapDispatchToProps);
let CounterButtonContainer = otherFunction(CounterButton)
export default CounterButtonContainer;
