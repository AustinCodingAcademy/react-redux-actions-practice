import ScaleVideo from "../components/ScaleVideo";
import {connect} from 'react-redux';
import {setVideoScale} from "../actions";

function mapStateToProps(state) {
  return {isLoading: state.isLoading}
}

function mapDispatchToProps(dispatch) {
  return {
    //this is the action in index.js.
    set: function(scale) {
      let action = setVideoScale(scale);
      dispatch(action);
    }
  }
}

// using dispatch changes the data
const ScaleVideoContainer = connect(null, mapDispatchToProps)(ScaleVideo);
export default ScaleVideoContainer
