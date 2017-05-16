import VideoPlayer from "../components/VideoPlayer";
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {URL: state.videoURL,
          scale: state.videoScale
  }
}

// you need both of these to make this work
const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
export default VideoPlayerContainer
