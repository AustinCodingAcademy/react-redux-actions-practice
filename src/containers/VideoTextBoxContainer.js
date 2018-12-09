import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(e){
     let action = setVideoURL(e);
     dispatch(action);
   }
  }
}

const VideoTextBoxContainer = connect(null,mapDispatchToProps)(VideoTextBox);

export default VideoTextBoxContainer