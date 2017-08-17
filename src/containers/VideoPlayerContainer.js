import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";

function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}


var otherFunction = connect(mapStateToProps);
var VideoPlayerContainer = otherFunction(VideoPlayer);
export default VideoPlayerContainer;
