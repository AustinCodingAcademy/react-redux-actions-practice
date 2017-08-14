import { connect } from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";

function mapDispatchToProps(dispatch){
  return {
   incresase:function(txt){
     let action = increaseCounter(txt);
     dispatch(action);
   }

   decrease:function(txt){
     let action = decreaseCounter(txt);
     dispatch(action);
   }
  }
 }


export default connect(null,mapDispatchToProps)(CounterButton);
