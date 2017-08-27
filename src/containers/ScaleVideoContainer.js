import {setVideoScale} from "../actions";
import {connect} from "react-redux";
import ScaleVideo from "../components/ScaleVideo";

function mapDispatchToProps(dispatch){
  return{
    set: function(scale){
      let action = setVideoScale(scale);
      dispatch(action);
    }
  }
}

//This is the shorter way to export:
//export default connect(null,mapDispatchToProps)(ScaleVideo)

let otherFunction = connect(null, mapDispatchToProps);
let ScaleVideoContainer = otherFunction(ScaleVideo);
export default ScaleVideoContainer;
