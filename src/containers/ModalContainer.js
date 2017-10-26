import { connect } from 'react-redux';
import Modal from '../components/Modal';
import {setIsLoading} from '../actions';

function mapStateToProps (state) {
  return {
    isLoading: state.isLoading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    setIsLoading: function (text) {
      let action = setIsLoading(text);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
