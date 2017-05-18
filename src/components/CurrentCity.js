import React from 'react';
import { connect } from "react-redux";

function CurrentCity(props) {
  return (
      <div>
        CurrentCity: {props.text}
      </div>
  );
}
export default CurrentCity;
