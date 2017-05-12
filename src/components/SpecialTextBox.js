import React from 'react';
import {connect} from "react-redux";
import {setSpecialText} from "../actions";
import {SpecialTextBoxContainer} from '../containers/SpecialTextBoxContainer';

function SpecialTextBox(props) {
  return (
      <div>
        Enter Special Text:
        <input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

function mapDispatchToProps(dispatch){
  return {
    set:function(txt){
      let action = setSpecialText(txt)
      dispatch(action);
    }
  }
}
export default (SpecialTextBox);