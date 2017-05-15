import {connect} from "react-redux";
import Users from "./Users";

const mapStateToProps = state => {
  return {
    users: state.users,
    sortOn: state.currentUserSort,
    firstNameFilter: state.searchText
  };
};

const UsersContainer = connect(
  mapStateToProps
)(Users);

export default UsersContainer;
