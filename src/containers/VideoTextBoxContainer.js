import {connect} from 'react-redux';
import VideoTextBox from "../components/VideoTextBox";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setVideoURL
  }
}

const VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox);
export default VideoTextBoxContainer
