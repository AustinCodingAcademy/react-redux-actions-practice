import {connect} from 'react-redux';
import ScaleVideo from "../components/ScaleVideo";

function mapDispatchToProps(dispatch){
  return{
    set:dispatch.setVideoScale
  }
}

const ScaleVideoContainer = connect(null, mapDispatchToProps)(ScaleVideo);
export default ScaleVideoContainer
