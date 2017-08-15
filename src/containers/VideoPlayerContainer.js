import {connect} from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

function mapStateToProps(state){
  return {
    URL: state.videoUrl,
    scale: state.videoScale
  }
}

export default connect(mapStateToProps)(VideoPlayer);