import {connect} from 'react-redux';
import VideoTextBox from "../components/VideoTextBox";

function mapDispatchToProps(state){
  return{
    set:state.setVideoURL
  }
}

const VideoTextBoxContainer = connect(mapDispatchToProps)(VideoTextBox);
export default VideoTextBoxContainer
