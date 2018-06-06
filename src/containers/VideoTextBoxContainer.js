import VideoTextBox from '../components/VideoTextBox'
import { setVideoURL } from '../actions';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch){
    return {
      set:function(URL){
        var action = setVideoURL(URL);
        dispatch(action);
      }
    }
    }
  
    
  
export default connect(null,mapDispatchToProps)(VideoTextBox);