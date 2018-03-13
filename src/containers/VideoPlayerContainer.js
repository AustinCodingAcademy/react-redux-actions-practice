import { connect } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";

// map URL to videoURL and scale to videoScale
function mapStateToProps(state) {
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

// export connect MSTP and VideoPlayer
export default connect(mapStateToProps)(VideoPlayer);
