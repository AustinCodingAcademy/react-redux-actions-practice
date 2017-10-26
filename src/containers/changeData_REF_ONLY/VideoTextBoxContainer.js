import { connect } from 'react-redux';
import {setVideoURL} from '.../actions';
import VideoTextBox from '.../components/VideoTextBox';

function mapDispatchToProps(dispatch){
  return {
   set:function(text){
     let action = setVideoURL(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(VideoTextBox);
