import React, { Component } from 'react';
import {CounterContainer} from '../containers/CounterContainer';

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}
export default Counter;