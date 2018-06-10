import { connect } from 'react-redux';
import ScaleVideo from "../components/ScaleVideo";
import { setVideoScale } from "../actions";


function mapDispatchToProps(dispatch){
  // console.log('containerscale', state.videoScale)
  return {
    set: function(scale){
      dispatch(setVideoScale(scale))
    }
  }
}

export default connect(null,mapDispatchToProps)(ScaleVideo);