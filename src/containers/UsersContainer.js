import { connect } from 'react-redux';
import Users from "../components/Users";
//import action?? NO this only cares about state data

function mapStateToProps(state){
  return {
    users: state.users,
    firstNameFilter: state.searchText,
    sortOn: state.currentUserSort
  }
}

export default connect(mapStateToProps)(Users);
