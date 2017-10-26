import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer';

//  URL: state.videoURL,

function mapStateToProps(state){
  return {
    // URL: "https://www.youtube.com/embed/zUBNPRZO6Yw",
    URL: state.videoURL,
    scale: state.videoScale
  };
}

export default connect(mapStateToProps)(VideoPlayer);
