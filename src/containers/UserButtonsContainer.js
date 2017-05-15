import {connect} from 'react-redux';
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(dispatch){
  return{
    add:dispatch.addUser,
    remove:dispatch.removeUser
  }
}

const UserButtonsContainer = connect(null, mapDispatchToProps)(UserButtons);
export default UserButtonsContainer
