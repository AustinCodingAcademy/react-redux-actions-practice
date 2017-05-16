import {connect} from 'react-redux';
import Modal from "../components/Modal";
import {setIsLoading} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    setIsLoading:function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}


const ModalContainer = connect(null, mapDispatchToProps)(Modal);
export default ModalContainer
