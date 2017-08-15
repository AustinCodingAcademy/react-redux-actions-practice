import VideoPlayer from '../components/VideoPlayer';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {
    scale: state.videoScale,
    URL: state.videoURL
  }
}

export default connect(mapStateToProps)(VideoPlayer);
