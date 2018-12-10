import { connect } from 'react-redux';
import {addUser, removeUser} from "../actions";
import UserButtons from "../components/UserButtons";



function mapDispatchToProps(dispatch){
    return {
      add:function(){
        var action = addUser();
        dispatch(action);
      },
      remove:function(){
        var action = removeUser();
        dispatch(action);
      }
    }
    }
const UserButtonsContainer = connect(null,mapDispatchToProps)(UserButtons);
export default UserButtonsContainer;
