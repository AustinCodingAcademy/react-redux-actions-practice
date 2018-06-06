import React from 'react';
import { connect } from 'react-redux'

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}

const msp = (state) => {return{count:state.currentCount}}

const CounterContainer = connect(msp)(Counter)

export default CounterContainer;