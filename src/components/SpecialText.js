import React from 'react';
import { connect } from "react-redux";

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text}
      </div>
  );
}
export default SpecialText;
