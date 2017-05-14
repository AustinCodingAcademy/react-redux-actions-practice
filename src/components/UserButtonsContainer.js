import {connect} from "react-redux";
import UserButtons from "./UserButtons";
import {addUser} from "../actions";
import {removeUser} from  "../actions";

const mapStateToProps = sate => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (user) => {
      const action = addUser(user);
      dispatch(action);
    },
    remove: () => {
      dispatch(removeUser());
    }
  };
};

const UserButtonsContainer= connect(
  mapStateToProps,
  mapDispatchToProps
)(UserButtons);

export default UserButtonsContainer;
