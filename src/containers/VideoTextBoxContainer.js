import { connect } from 'react-redux';
import {setVideoUrl} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


const mapDispatchToProps = {
   set:setVideoUrl
  }


export default connect(null,mapDispatchToProps)(VideoTextBox);
