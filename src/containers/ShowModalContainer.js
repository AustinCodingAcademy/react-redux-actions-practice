// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import ShowModal from "../components/ShowModal";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(isLoading){
     let action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(ShowModal);
