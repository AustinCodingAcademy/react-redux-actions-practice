import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoPlayer from "../components/VideoPlayer";

function mapStateToProps(state){
  return{
    set: setVideoURL
  }
}

export default connect(null,mapStateToProps)(VideoPlayer);
