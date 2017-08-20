import {increaseCounter,decreaseCounter} from "../actions";
import {connect} from "react-redux";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch){
  return {
    increase:function(){
      var action = increaseCounter();
      dispatch(action);
    },
    decrease:function(){
      var action = decreaseCounter();
      dispatch(action);
    }
  }
}

// var otherFunction = connect(null, mapDispatchToProps);
// var CounterButtonContainer = otherFunction(CounterButton);

export default connect (null,mapDispatchToProps)(CounterButton);
