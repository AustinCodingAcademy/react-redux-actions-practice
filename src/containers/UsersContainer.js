import { connect } from 'react-redux';
import { addUser } from "../actions";
import { setSearchText } from "../actions";
import { setCurrentUserSort } from "../actions";
import Users from "../components/Users";

function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

// function mapDispatchToProps(dispatch){
//   return {
//     addUser:function(user){
//       let action = addUser(user);
//       dispatch(action);
//     },
//     setSearchText:function(text){
//       let action = setSearchText(text);
//       dispatch(action);
//     },
//     setCurrentUserSort:function(sort){
//       let action = setCurrentUserSort(sort);
//       dispatch(action);
//     }
//   };
// }

const UsersContainer = connect(mapStateToProps)(Users);
export default UsersContainer;
