import {addUser, removeUser} from "../actions";
import {connect} from "react-redux";
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(dispatch) {
  return{
    increase: function(){
      let action = addUser();
      dispatch(action);
    },
    decrease: function(){
      let action = removeUser();
      dispatch(action);
    }
  }
}

//This is the shorter way to export.
//export default connect(null,mapDispatchToProps)(CounterButton)

let otherFunction = connect(null, mapDispatchToProps);
let UserButtonsContainer = otherFunction(UserButtons)
export default UserButtonsContainer;
