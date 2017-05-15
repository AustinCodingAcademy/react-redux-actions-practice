import {connect} from 'react-redux';
import ScaleVideo from "../components/ScaleVideo";

function mapDispatchToProps(state){
  return{
    set:state.setVideoScale
  }
}

const ScaleVideoContainer = connect(mapDispatchToProps)(ScaleVideo);
export default ScaleVideoContainer
