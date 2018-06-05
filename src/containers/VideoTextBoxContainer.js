import { connect } from 'react-redux';
import {setVideoURL} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(URL){
     let action = setVideoURL(URL);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(VideoTextBox);