import { connect } from "react-redux";
import {videoURL} from "../actions"
import VideoTextBox from "../components/VideoTextBox"


function mapDispatchToProps(dispatch){
  return{
    add: function(URL){
      let action = videoURL(URL);
      dispatch(action);
    }
  }
}

const VideoTextBoxContainer = connect(mapDispatchToProps)(VideoTextBox);
export default VideoTextBoxContainer
