import { connect } from 'react-redux';
import ScaleVideo from '../components/ScaleVideo';
import { setVideoScale } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    set: function (num) {
      let action = setVideoScale(num);
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(ScaleVideo);