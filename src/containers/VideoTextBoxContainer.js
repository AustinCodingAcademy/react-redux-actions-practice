import {connect} from "react-redux";
import VideoTextBox from "../components/VideoTextBox";
import {setVideoURL} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    set:function(txt){
      let action = setVideoURL(txt);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(VideoTextBox);
