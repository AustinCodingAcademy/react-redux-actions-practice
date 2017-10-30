import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

function mapStateToProps(state) {
  return {
    URL: state.videoURL,
    scale: state.videoScale
  };
}
const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
export default VideoPlayerContainer;
