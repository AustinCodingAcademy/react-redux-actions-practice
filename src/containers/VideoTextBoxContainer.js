// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setVideoURL } from "../actions";
import VideoTextBox from "../components/VideoTextBox";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   set:function(theUrl){
     let action = setVideoURL(theUrl);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(VideoTextBox);
