import React from 'react';
import { connect } from "react-redux";

function Counter(props) {
  return (
      <div>
        Counter: {props.count}
      </div>
  );
}
export default Counter;
