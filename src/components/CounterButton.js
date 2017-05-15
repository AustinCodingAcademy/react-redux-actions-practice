import React from "react";
import propTypes from "prop-types";

function CounterButton(props) {
  return (
    <div>
      <button onClick={
        () => {
          if (props.increase) {
            props.increase();
          }
        }
      }>Increase Counter By One</button>
      <button onClick={
        () => {
          if (props.decrease) {
            props.decrease();
          }
        }
      }>Decrease Counter By One</button>
    </div>
  );
}

CounterButton.propTypes = {
  decrease: propTypes.func,
  increase: propTypes.func
};

export default CounterButton;
