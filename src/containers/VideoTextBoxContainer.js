import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


function mapDispatchToProps(dispatch){
  return {
    set: function (URL) {
        let action = setVideoURL(URL);
        dispatch(action);
    }
  }
}



var label = connect(null, mapDispatchToProps);
var VideoTextBoxContainer = label(VideoTextBox);
export default VideoTextBoxContainer;
