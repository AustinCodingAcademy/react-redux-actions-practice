import React from 'react';
import { increaseCounter } from '../actions';
import { connect } from 'react-redux';

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

//I want to change data
function mapDispatchToProps(dispatch){
  return {
    increase:function(){
      var action = increaseCounter();
      dispatch(action);
    }
  }
  }
  export default connect(null,mapDispatchToProps)(CounterButton);
