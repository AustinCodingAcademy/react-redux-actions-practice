// Import connect
// import actions
// import the appropriate component
import { connect } from 'react-redux';
import { addUser, removeUser } from "../actions";
import UserButtons from "../components/UserButtons";

// Create mapDispatchToProps
function mapDispatchToProps(dispatch){
  return {
   add:function(theUser){
     let action = addUser(theUser);
     dispatch(action);
   },
   remove:function(){
     let action = removeUser();
     dispatch(action);
   }
  }
}

//Connect component to mapDispatchToProps.  export Container.
export default connect(null,mapDispatchToProps)(UserButtons);
