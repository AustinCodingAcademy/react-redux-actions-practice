import {connect} from "react-redux";
import UserButtons from "../components/UserButtons";
import {addUser, removeUser} from "../actions";

function mapDispatchToProps(dispatch){
    return {
      //increase is the name of the prop you're setting up
      add:function(){
        const action = addUser();
        dispatch(action);
      },
      remove:function(){
        const action = removeUser();
        dispatch(action);
      }
    }
    }
  export default connect(null,mapDispatchToProps)(UserButtons);