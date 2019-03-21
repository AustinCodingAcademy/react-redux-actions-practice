import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";
import setVideoURL from '../actions';

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    URL: videoURL,
    scale: videoScale 
  }
}

export default connect(mapStateToProps)(VideoPlayer);
