import ScaleVideo from '../components/ScaleVideo';
import {setVideoScale} from '../actions';
import {connect} from 'react-redux';


function mapDispatchToProps(dispatch) {
  return {
    set: function(scale) {
      dispatch(setVideoScale(scale))
    }
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);
