import {connect} from 'react-redux';
import Modal from "../components/Modal";

function mapDispatchToProps(dispatch){
  return{
    isLoading:dispatch.isLoading
  }
}

const ModalContainer = connect(null, mapDispatchToProps)(Modal);
export default ModalContainer
