import {connect} from "react-redux";
import {setIsLoading} from "../actions";
import Modal from "./Modal";

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: (isLoading) => {
      const action = setIsLoading(isLoading);
      dispatch(action);
    }
  };
};

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

export default ModalContainer;
