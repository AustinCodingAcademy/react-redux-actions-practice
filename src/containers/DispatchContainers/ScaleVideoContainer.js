import { connect } from 'react-redux';
import { setVideoScale } from "../../actions"
import ScaleVideo from "../../components/ScaleVideo";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    set: setVideoScale 
  }
}

export default connect(mapStateToProps)(ScaleVideo);
