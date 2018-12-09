import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';
import {increaseCounter, decreaseCounter} from "../actions";



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
  
  
const CounterButtonContainer = connect(null,mapDispatchToProps)(CounterButton);
  
export default CounterButtonContainer;