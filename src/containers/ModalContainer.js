import { connect } from 'react-redux';
import Modal from '../components/Modal';
import {setIsLoading} from '../actions';

function mapDispatchToProps(dispatch){
  return {
    // returns an object that we call an action
    setIsLoading:function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

function mapStateToProps(state){
  return {
    isLoading:state.isLoading
  }
}

const ModalContainer = connect(mapStateToProps,mapDispatchToProps)(ModalContainer);


export default ModalContainer