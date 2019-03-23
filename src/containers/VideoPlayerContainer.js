import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";


function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);
