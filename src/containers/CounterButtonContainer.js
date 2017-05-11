import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';
import {increaseCounter,decreaseCounter} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    increase:function(count){
      let action = increaseCounter(count);
      dispatch(action);
    },
    decrease:function(count){
      let action = decreaseCounter(count);
      dispatch(action);
    }
  }
}

const CounterButtonContainer = connect(mapDispatchToProps)(CounterButtonContainer);

export default CounterButtonContainer