import { connect } from 'react-redux';
import {setCurrentUser} from "../actions";
import VideoPlayer from "../components/VideoPlayer";
import ScaleVideo from "../components/ScaleVideo";


//map a prop called text to the state VideoPlayer
function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);
