import React from 'react';
import { connect } from 'react-redux'
import { setVideoURL } from '../actions'

function VideoTextBox(props) {
  return (
      <div>
        Enter URL of YouTube video
        <input 
      onChange={(e)=>{
        if(props.set){
          props.set(e.target.value);
        }
      }}
      type="text" />

      </div>
  );
}

const mdp = (dispatch) =>{
  return{
    set:function(video){
      dispatch(setVideoURL(video))
    }
  }
}

export default connect(null, mdp)(VideoTextBox);