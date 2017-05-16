import { connect } from 'react-redux';
import ScaleVideo from '../components/ScaleVideo';
import { setVideoScale } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    set: (scale) => {
      const action = setVideoScale(scale);
      dispatch(action);
    }
  }
}

const ScaleVideoContainer = connect(null, mapDispatchToProps)(ScaleVideo);

export default ScaleVideoContainer;
