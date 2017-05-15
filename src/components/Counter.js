import React from "react";
import PropTypes from "prop-types";

function Counter(props) {
  return (
    <div>
      Counter: {props.count}
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number,

};

export default Counter;
