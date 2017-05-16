import VideoTextBox from "../components/VideoTextBox";
import {connect} from 'react-redux';
import {setVideoURL} from '../actions';

function mapDispatchToProps(dispatch) {
  return {set: function(URL) {
    let action = setVideoURL(URL);
       dispatch(action);
    }
  }
}

// you need both of these to make this work
const VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox);
 export default VideoTextBoxContainer
