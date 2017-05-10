import {connect} from "react-redux";
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";


function mapDispatchToProps(dispatch){
  return {
    increase:function(){
      let action = increaseCounter();
      dispatch(action);
    },
    decrease:function(){
      let action = decreaseCounter();
      dispatch(action);
    }
  }
}


const CounterButtonContainer = connect(mapDispatchToProps)(CounterButton);


export default CounterButtonContainer
