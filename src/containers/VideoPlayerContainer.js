import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";

//map a prop called text to the state specialText
function mapStateToProps(state){
  console.log("Video URL: " + state.videoURL);

  return {
    URL: state.videoURL
  }
}

export default connect(mapStateToProps)(VideoPlayer);
