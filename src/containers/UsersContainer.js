import { connect } from "react-redux";
import Users from "../components/Users"

function mapStateToProps(state){
  return{
    users:state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort

  }
}

const UsersContainer = connect(mapStateToProps)(Users);
export default UsersContainer
