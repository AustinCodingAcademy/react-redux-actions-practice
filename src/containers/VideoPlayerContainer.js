//Import connect from react-redux
//import appropriate component: VideoPlayer
import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";

//map a prop called URL, scale to the state
function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

// Call connect function
export default connect(mapStateToProps)(VideoPlayer);
