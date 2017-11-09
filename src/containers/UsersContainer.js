import { connect } from 'react-redux';
import {setCurrentUser} from "../actions";
import SortUsers from "../components/SortUsers";
import SearchTextBox from "../components/SearchTextBox";
import Users from "../components/Users";

//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users);
