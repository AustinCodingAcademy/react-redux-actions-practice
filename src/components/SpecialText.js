import React from "react";
import propTypes from "prop-types";

function SpecialText(props) {
  return (
    <div>
      Special Text: {props.text}
    </div>
  );
}

SpecialText.propTypes = {
  text: propTypes.string,
};


export default SpecialText;
