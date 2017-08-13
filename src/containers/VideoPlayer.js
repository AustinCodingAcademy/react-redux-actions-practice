import { connect } from 'react-redux';
import {setVideoScale} from "../actions";
import VideoPlayer from "../components/VideoPlayer";

function mapStateToProps(state){
  return {
    URL: state.videoURL,
    scale: setVideoScale
  }
}


export default connect(mapStateToProps,null)(VideoPlayer);
