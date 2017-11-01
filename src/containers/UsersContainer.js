import { connect } from 'react-redux';
import Users from "../components/Users";

function mapStateToProps(state){
  return {
    users: state.users,
    searchText: state.firstNameFilter,
    currentUserSort: state.sortOn,
  }
}

export default connect(null,mapDispatchToProps)(Users);
