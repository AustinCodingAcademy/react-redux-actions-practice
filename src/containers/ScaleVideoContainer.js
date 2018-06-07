import { connect } from 'react-redux';
import {setVideoScale} from "../actions";
import ScaleVideo from "../components/ScaleVideo";


const mapDispatchToProps = (dispatch) => {
  return {
   set:function(scale){
     let action = setVideoScale(scale);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ScaleVideo);