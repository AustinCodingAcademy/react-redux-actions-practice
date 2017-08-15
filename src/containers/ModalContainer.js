import Modal from '../components/Modal';
import {connect} from 'react-redux';
import {setIsLoading} from '../actions';


function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoading: function(isLoading) {
      dispatch(setIsLoading(isLoading))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Modal);
