import { connect } from "react-redux";
import {setVideoScale} from "../actions"
import ScaleVideo from "../components/ScaleVideo"

function mapDispatchToProps(dispatch){
  return{
    set: function(scale){
      let action = setVideoScale(scale);
      dispatch(action);
    }
  }
}

const ScaleVideoContainer = connect(null, mapDispatchToProps)(ScaleVideo);
export default ScaleVideoContainer
