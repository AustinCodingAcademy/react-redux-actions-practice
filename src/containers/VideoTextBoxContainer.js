import { connect } from 'react-redux';
import VideoTextBox from '../components/VideoTextBox';
import {setVideoURL} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    set:function(URL){
      let action = setVideoURL(URL);
      dispatch(action);
    }
  }
}

const VideoTextBoxContainer = connect(null,mapDispatchToProps)(VideoTextBox);

export default VideoTextBoxContainer