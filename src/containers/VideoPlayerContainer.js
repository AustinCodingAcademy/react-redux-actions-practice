import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
import { setVideoURL } from '../actions';

function mapStateToProps(state) {
  return {
    URL: setVideoURL,
    scale: videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);