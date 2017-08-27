import {connect} from "react-redux";
import Users from "../components/Users";

function mapStateToProps(state){
  return{
    //I think I can delete line 7
    count: state.users,
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

//this is the shorter way to export:
//export default connect(mapStateToProps)(Users)

let otherFunction = connect(mapStateToProps);
let UsersContainer = otherFunction(Users);
export default UsersContainer;
