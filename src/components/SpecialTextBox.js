import React from 'react';
import {setSpecialText} from "../actions";

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
    set:function(text){
      let action = setSpecialText(text)
      dispatch(action);
    }
  }
}

export default (SpecialTextBox);

