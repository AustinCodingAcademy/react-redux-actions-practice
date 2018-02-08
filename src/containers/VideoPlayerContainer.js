import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import VideoPlayer from "../components/VideoPlayer";
import state from "../state";


function mapStateToProps(state){
  return {
   scale: state.videoScale,
   URL: state.videoURL
}

export default connect(null,mapDispatchToProps)(VideoPlayer);
