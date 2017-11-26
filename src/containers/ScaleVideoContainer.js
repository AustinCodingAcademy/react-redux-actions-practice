import { connect } from "react-redux";
import { setVideoScale } from "../actions";
import VideoPlayer from "../components/VideoPlayer";

function mapDispatchToProps(dispatch){
  return {
    set:function(scale){
      let action = setVideoScale(scale);
      dispatch(action)
    }
  }
}

export default connect(null,mapDispatchToProps)(VideoPlayer);
