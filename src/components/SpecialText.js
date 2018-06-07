import React from 'react';
import { connect } from 'react-redux'

function SpecialText(props) {
  return (
      <div>
        Special Text: {props.text}
      </div>
  );
}

const msp = state =>{return{text:state.specialText}}

const SpecialTextContainer = connect(msp)(SpecialText)

export default SpecialTextContainer;