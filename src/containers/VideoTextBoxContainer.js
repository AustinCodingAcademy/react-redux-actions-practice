import { connect } from 'react-redux';
import {findVideo} from "../actions";
import VideoTextBox from "../components/VideoTextBox";


const mapDispatchToProps = {
   set: findVideo
  }


export default connect(null,mapDispatchToProps)(VideoTextBox);
