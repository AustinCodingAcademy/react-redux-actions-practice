import { connect } from 'react-redux';
import Users from "../components/Users";
import SearchTextBox from "../components/SearchTextBox";
import SortUsers from "../components/SortUsers";

function mapStateToProps(state){
    return {
      users:state.users,
      firstNameFilter:state.searchText,
      sortOn:state.currentUserSort
    }
  }

  export default connect(mapStateToProps)(Users,SearchTextBox,SortUsers);