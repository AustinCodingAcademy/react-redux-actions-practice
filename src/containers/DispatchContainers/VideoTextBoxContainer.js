import { connect } from 'react-redux';
import { setVideoURL } from "../../actions"
import VideoTextBox from "../../components/VideoTextBox";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    set: setVideoURL 
  }
}

export default connect(mapStateToProps)(VideoTextBox);
