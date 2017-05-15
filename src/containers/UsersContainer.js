import {connect} from 'react-redux';
import Users from "../components/Users";

function mapStateToProps(state){
  return{
    users:state.users,
    sortOn:state.currentUserSort,
    firstNameFilter:state.searchText
  }
}

const UsersContainer = connect(mapStateToProps)(Users);
export default UsersContainer
