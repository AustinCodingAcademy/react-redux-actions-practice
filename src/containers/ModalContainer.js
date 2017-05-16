import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { setIsLoading } from '../actions';

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: (bool) => {
      const action = setIsLoading(bool);
      dispatch(action);
    }
  }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
