import {connect} from "react-redux";
import VideoPlayer from "./VideoPlayer";

const mapStateToProps = (state) => {
  return {
    videoURL: state.videoURL,
    scale: state.videoScale
  };
};

const VideoPlayerContainer = connect(
  mapStateToProps
)(VideoPlayer);

export default VideoPlayerContainer;
