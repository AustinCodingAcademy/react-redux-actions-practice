import { connect } from "react-redux";
import Users from "../components/Users";

// mapping props users, firstNameFilter, and sortOn to users, searchText, and currentUserSort

function mapStateToProps(state) {
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

// call connect function passing mapStateToProps and Component(Users) and exporting
export default connect(mapStateToProps)(Users);
