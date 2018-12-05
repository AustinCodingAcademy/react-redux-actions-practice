import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import { setVideoURL, setVideoScale } from '../actions';

function mapStateToProps(state) {
  return {
    URL: setVideoURL,
    scale: setVideoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);