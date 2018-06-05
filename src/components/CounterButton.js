import React from "react";
import { increaseCounter, decreaseCounter } from "../actions";
import { connect } from "react-redux";

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

//  I want to change the data
//  dispatch is sending this somewhere 
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
