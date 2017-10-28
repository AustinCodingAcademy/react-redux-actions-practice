// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setVideoScale } from "../actions";
import scaleVideo from "../components/scaleVideo";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   set:function(scale){
     let action = setVideoScale(scale);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(scaleVideo);
