//Import connect from react-redux
//import appropriate component: Users
import { connect } from 'react-redux';
import Users from "../components/Users";

//map a prop called users, firstNameFilter, and sortOn to the state
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

// Call connect function
export default connect(mapStateToProps)(Users);
