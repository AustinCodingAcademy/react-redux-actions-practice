import React from "react";
import propTypes from "prop-types";

function SpecialTextBox(props) {
  return (
    <div>
      Enter Special words:
      <input onInput={(e) => {
        if (props.set) {
          props.set(e.target.value);
        }
      }} />
    </div>
  );
}

SpecialTextBox.propTypes = {
  set: propTypes.func,

};

export default SpecialTextBox;
