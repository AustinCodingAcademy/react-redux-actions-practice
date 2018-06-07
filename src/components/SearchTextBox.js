import React from 'react';
import { connect } from 'react-redux'
import { setSearchText } from '../actions'

function SearchTextBox(props) {
  return (
      <div>
        Search Users on First Name:
        <input onChange={(e)=>{
            if(props.set){
              props.set(e.target.value);
            }
        }} />
      </div>
  );
}

const mdp = dispatch =>{
  return{
    set:function(text){
      dispatch(setSearchText(text))
    }
  }
}

export default connect(null, mdp)(SearchTextBox)