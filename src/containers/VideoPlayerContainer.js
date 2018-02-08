import { connect } from 'react-redux';
import VideoPlayer from "../components/VideoPlayer";
import state from "../state";


function mapStateToProps(state){
    return {
     scale: state.videoScale,
     URL: state.videoURL
  }
}

export default connect(mapStateToProps, null)(VideoPlayer);
