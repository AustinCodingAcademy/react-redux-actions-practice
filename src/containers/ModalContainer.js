import { connect } from 'react-redux';
import Modal from '../components/Modal';
import { setIsLoading } from '../actions'

function mapDispatchToProps(dispatch){
  return {
    setIsLoading: function(bool){
      let action = setIsLoading(bool);
      dispatch(action);
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal);