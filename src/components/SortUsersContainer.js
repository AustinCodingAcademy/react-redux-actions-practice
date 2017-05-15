import {connect} from "react-redux";
import {setCurrentUserSort} from "../actions";
import SortUsers from "./SortUsers";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    set: (sort) => {
      const action = setCurrentUserSort(sort);
      dispatch(action);
    }
  };
};

const SortUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortUsers);

export default SortUsersContainer;
