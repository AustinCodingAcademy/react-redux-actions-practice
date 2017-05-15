import {connect} from 'react-redux';
import UserButtons from "../components/UserButtons";

function mapDispatchToProps(state){
  return{
    add:state.addUser,
    remove:state.removeUser
  }
}

const UserButtonsContainer = connect(mapDispatchToProps)(UserButtons);
export default UserButtonsContainer
