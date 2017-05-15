import {connect} from 'react-redux';
import Modal from "../components/Modal";

function mapDispatchToProps(state){
  return{
    isLoading:state.isLoading
  }
}

const ModalContainer = connect(mapDispatchToProps)(Modal);
export default ModalContainer
