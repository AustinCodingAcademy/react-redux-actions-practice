import { connect } from 'react-redux';
import {setVideoScale} from '../actions';
import ScaleVideo from "../components/ScaleVideo";

function mapDispatchToProps(dispatch) {
  return {
   set: function(scale) {
     dispatch(setVideoScale(scale));
   },
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);
