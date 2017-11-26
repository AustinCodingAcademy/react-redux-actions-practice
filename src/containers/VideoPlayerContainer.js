import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";

// map a prop called URL to state.setVideoURL
function mapStateToProps(state) {
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);
