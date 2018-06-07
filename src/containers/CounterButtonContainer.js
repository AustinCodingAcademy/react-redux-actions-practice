import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";


const mapDispatchToProps = (dispatch) => {
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

export default connect(null,mapDispatchToProps)(CounterButton);