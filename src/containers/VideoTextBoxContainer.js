import {setVideoURL} from "../actions";
import {connect} from "react-redux";
import VideoTextBox from "../components/VideoTextBox";

function mapDispatchToProps(dispatch){
  return{
    set: function(){
      let action = setVideoURL();
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
// export default connect(null,mapDispatchToProps)(VideoTextBox)

let otherFunction = connect(null, mapDispatchToProps);
let VideoTextBoxContainer = otherFunction(VideoTextBox);
export default VideoTextBoxContainer;
