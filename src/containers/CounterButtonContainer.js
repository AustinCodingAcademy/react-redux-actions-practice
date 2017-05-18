import { connect } from "react-redux";
import {increaseCounter, decreaseCounter} from "../actions"
import CounterButton from "../components/CounterButton"



function mapDispatchToProps(dispatch){
  return{
    increase: function(){
      let action = increaseCounter();
      dispatch(action);
    },
    decrease: function(){
      let action = increaseCounter();
      dispatch(action);
    }
  }
}


const CounterButtonContainer = connect(mapDispatchToProps)(CounterButton);
export default CounterButtonContainer;
