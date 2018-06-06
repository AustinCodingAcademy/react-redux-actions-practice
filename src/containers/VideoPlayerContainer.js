import {connect} from 'react-redux';
import VideoPlayer from "../components/VideoPlayer"

const mapStateToProps = (state) => {
  return {
    URL: state.videoURL
 };
};

 
export default connect(mapStateToProps)(VideoPlayer);