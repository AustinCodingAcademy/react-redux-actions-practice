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


const VideoTextBoxContainer = connect(mapDispatchToProps)(VideoTextBox);


export default VideoTextBoxContainer
