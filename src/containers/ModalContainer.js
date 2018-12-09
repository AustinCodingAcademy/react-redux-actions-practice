import { connect } from 'react-redux';
import Modal from '../components/Modal';

function mapStateToProps(state){
    return{isLoading:state.isLoading}
  }
  
const ModalContainer = connect(mapStateToProps)(Modal);
  
export default ModalContainer;