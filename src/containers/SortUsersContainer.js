// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { setCurrentUserSort } from "../actions";
import sortUsers from "../components/sortUsers";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   set:function(theUser){
     let action = setCurrentUserSort(theUser);
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(sortUsers);
