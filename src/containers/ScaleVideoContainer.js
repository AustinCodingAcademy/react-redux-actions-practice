import { connect } from 'react-redux';
import {scaleVideo} from "../actions";
import ScaleVideo from "../components/ScaleVideo";


const mapDispatchToProps = {
   set:scaleVideo
  }


export default connect(null,mapDispatchToProps)(ScaleVideo);
