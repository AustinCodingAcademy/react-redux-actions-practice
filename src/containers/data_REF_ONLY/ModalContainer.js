import { connect } from 'react-redux';
// import {setCurrentUser} from '.../actions';
import Modal from '.../components/Modal';

// map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(Modal);
