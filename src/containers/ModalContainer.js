import Modal from '../components/Modal';
import {connect} from 'react-redux';
import {setIsLoading} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    set: function (isLoading) {
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(Modal);

