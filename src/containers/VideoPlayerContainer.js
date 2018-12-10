import { connect } from 'react-redux';

import VideoPlayer from "../components/VideoPlayer";


function mapStateToProps(state){
  return {
    URL: state.videoURL
  }
}
const VideoPlayerContainer= connect(mapStateToProps)(VideoPlayer);
export default VideoPlayerContainer;
