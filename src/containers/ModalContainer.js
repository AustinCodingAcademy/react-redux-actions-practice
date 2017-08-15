import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {setIsLoading} from "../actions";

function mapDispatchToProps(dispatch){
  return {
    setIsLoading: function(){
      var action = setIsLoading();
      dispatch(action);
    } 
  }
}

export default connect(mapDispatchToProps)(Modal);