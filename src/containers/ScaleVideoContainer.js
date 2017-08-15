import {connect} from "react-redux";
import {setVideoScale} from "./actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(){
      var action = setVideoScale();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);