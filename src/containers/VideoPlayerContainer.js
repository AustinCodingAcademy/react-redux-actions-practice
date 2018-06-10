import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";

function mapSateToProps(state){
  return{
  URL:state.videoURL,
  scale:state.videoScale
}
}

export default connect(mapSateToProps)(VideoPlayer);