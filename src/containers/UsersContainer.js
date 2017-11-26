import { connect } from "react-redux";
import Users from "../components/Users";

// map props users, firstNameFilter, and sortOn into users, searchText, and currentUserSort
function mapStateToProps(state) {
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort,
  }
}

export default connect(mapStateToProps)(Users);
