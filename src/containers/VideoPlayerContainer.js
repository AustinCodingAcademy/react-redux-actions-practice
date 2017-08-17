import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';
 
function mapStateToProps(state) {
  console.log("videoscale ",state.videoScale)
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);