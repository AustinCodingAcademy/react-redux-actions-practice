import React from 'react';
import { increaseCounter } from '../actions';
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
            if(props.increase){
              props.decrease();
            }
          }
        }>Decrease Counter By One</button>
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase() {
      console.log('increase');
      dispatch(increaseCounter());
    },
    // decrease: decreaseCounter()
  };
};

export default connect(null, mapDispatchToProps)(CounterButton);
