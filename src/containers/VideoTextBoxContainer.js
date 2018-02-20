import React from 'react';
import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


function mapDispatchToProps(dispatch){
return {
  set:function(URL){
    var action = setVideoURL(URL);
    dispatch(action);
  }
}
}

const VideoTextBoxContainer = connect(null,mapDispatchToProps)(VideoTextBox);
export default VideoTextBoxContainer;
