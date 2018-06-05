import React from 'react';
import { connect } from "react-redux"

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}

function msp(state) {
  return {
    count:state.currentCount
  }
}
export default connect(msp)(Counter)