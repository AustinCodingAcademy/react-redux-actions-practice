import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";
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

const CounterButtonContainer = connect(null,mapDispatchToProps)(CounterButton);
export default CounterButtonContainer;
