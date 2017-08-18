import ScaleVideo from "../components/ScaleVideo";
import {connect} from 'react-redux';
import {setVideoScale} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function(scale) {
      let action = setVideoScale(scale);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);

