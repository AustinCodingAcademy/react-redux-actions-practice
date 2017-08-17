import { connect } from 'react-redux';
import { setIsLoading } from "../actions";
import Modal from "../components/Modal";


function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: (isLoading) => {
      const action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

var otherFunction = connect(mapStateToProps, mapDispatchToProps);
var ModalContainer = otherFunction(Modal);
export default ModalContainer;
