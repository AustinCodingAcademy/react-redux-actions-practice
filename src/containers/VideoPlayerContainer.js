import {connect} from "react-redux";
import VideoPlayer from "../components/VideoPlayer"

function mapStateToProps(state){
  return{
    URL: state.videoURL,
    scale: state.videoScale
  }
}

//this is the shorter way to export:
//export default connect(mapStateToProps)(VideoPlayer)

let otherFunction = connect(mapStateToProps);
let VideoPlayerContainer = otherFunction(VideoPlayer);
export default VideoPlayerContainer;
