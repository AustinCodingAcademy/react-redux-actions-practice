import {connect} from "react-redux";
import VideoPlayer  from "../components/VideoPlayer";

const mapStateToProps = function (state) {
  return {
    URL: state.videoURL,
    scale: state.videoScale
  };
};
const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;