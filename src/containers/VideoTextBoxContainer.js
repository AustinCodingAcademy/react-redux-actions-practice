import VideoTextBox from '../components/VideoTextBox';
import {setVideoURL} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    set: function(URL) {
      dispatch(setVideoURL(URL))
    }
  }
}

export default connect(null, mapDispatchToProps)(VideoTextBox);
