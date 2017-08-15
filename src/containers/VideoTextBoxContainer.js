import {connect} from "react-redux";
import VideoTextBox from "./components";
import {setVideoURL} from "./actions";

function mapDispatchToProps(dispatch){
  return {
    set: function(){
      var action = setVideoURL();
      dispatch(action);
    }

  }
}

export default connect(null, mapDispatchToProps)(VideoTextBox);