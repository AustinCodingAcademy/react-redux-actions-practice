import {connect} from "react-redux";
import {setVideoUrl} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


function mapDispatchToProps(dispatch){
  return {
    set:function(url){
      let action = setVideoUrl(url);
      dispatch(action);
    }
  }
}


const VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox);


export default VideoTextBoxContainer
