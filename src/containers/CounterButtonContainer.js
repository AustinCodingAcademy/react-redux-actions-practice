import { increaseCounter, decreaseCounter } from "../actions";
import { connect } from "react-redux";
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

export default connect(null, mapDispatchToProps)(CounterButton);