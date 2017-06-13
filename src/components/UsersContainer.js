import {connect} from "react-redux";
import Users from "Users";

// Why isn't users defined?
const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const UsersContainer = connect(
  mapStateToProps,
)(Users);

export default UsersContainer;
