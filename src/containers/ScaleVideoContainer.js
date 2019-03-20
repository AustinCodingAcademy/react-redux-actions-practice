import { connect } from 'react-redux';
import {setVideoScale} from "../actions";
import ScaleVideo from "../components/ScaleVideo.js";


const mapDispatchToProps = {
   set:setVideoScale
  }


export default connect(null,mapDispatchToProps)(ScaleVideo);