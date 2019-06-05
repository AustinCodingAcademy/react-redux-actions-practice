import React from 'react';
import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from '../actions/index';

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

const mapDispatchToProps = {
  increase: increaseCounter,
  decrease: decreaseCounter
}

export default connect(null, mapDispatchToProps)(CounterButton);