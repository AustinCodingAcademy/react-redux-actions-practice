import { connect } from 'react-redux';
import {setVideoURL} from '../actions';
import VideoTextBox from "../components/VideoTextBox";

function mapDispatchToProps(dispatch) {
  return {
   set: function(URL) {
     dispatch(setVideoURL(URL));
   },
  }
}

export default connect(null, mapDispatchToProps)(VideoTextBox);
