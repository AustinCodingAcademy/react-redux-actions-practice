import { connect } from 'react-redux';
import {setSpecialText} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(videoURL){
     let action = setVideoURL(videoURL);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(VideoTextBox);
