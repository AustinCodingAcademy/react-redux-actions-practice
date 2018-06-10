import { connect } from 'react-redux';
import VideoTextBox from "../components/VideoTextBox";
import { setVideoURL } from "../actions";

function mapDispatchToProps(dispatch){
  return{
  set:function(video){
    dispatch(setVideoURL(video))
  }
}
}

export default connect(null,mapDispatchToProps)(VideoTextBox);