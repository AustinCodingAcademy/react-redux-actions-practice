import { connect } from 'react-redux';
import { addUser, removeUser } from "../../actions"
import UserButtons from "../../components/UserButtons";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    add: addUser,
    remove: removeUser 
  }
}

export default connect(mapStateToProps)(UserButtons);
