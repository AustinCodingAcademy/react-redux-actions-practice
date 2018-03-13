import UserButtons from "../components/UserButtons";
import { connect } from "react-redux";
import { addUser, removeUser } from "../actions";

// map add to action addUser
// map remove to action removeUser

function mapDispatchToProps(dispatch) {
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

// export connect null, MDTP and UserButtons
export default connect(null, mapDispatchToProps)(UserButtons);
