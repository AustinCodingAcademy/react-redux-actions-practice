import {connect} from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


// `set` to action `setVideoURL`
const mapDispatchToProps = dispatch => {
  return {
    set: (URL) => {
      const action = setVideoURL(URL);
      dispatch(action);
    }
  };
};

const VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox);
export default VideoTextBoxContainer
