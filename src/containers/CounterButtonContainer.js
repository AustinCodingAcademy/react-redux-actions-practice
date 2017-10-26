import { connect } from 'react-redux';
import {increaseCounter} from '../actions';
import {decreaseCounter} from '../actions';
import CounterButton from '../components/CounterButton';

function mapDispatchToProps(dispatch){
  return {
   increase:function(text){
     let action = increaseCounter(text);
     dispatch(action);
   },

   decrease:function(text){
     let action = decreaseCounter(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(CounterButton);

/*
const CounterButtonContainer = connect(mapStateToProps)(CounterButton);
export default CounterButtonContainer;
*/
