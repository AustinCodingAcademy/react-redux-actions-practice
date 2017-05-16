import { connect } from 'react-redux';
import VideoTextBox from '../components/VideoTextBox';
import { setVideoURL } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    set: (url) => {
      const action = setVideoURL(url);
      dispatch(action);
    }
  }
}

const VideoTextBoxContainer = connect(null, mapDispatchToProps)(VideoTextBox);

export default VideoTextBoxContainer;
