import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";


function CounterButton(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.increase){
              props.increase();
            }
          }
        }>Increase Counter By One</button>
        <button onClick={
          ()=>{
            if(props.decrease){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}
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

export default connect(null,mapDispatchToProps)(CounterButton);
  
