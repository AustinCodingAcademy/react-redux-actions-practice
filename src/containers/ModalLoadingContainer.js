import { connect } from 'react-redux';

import LoadingModal from "../components/Modal";


function mapStateToProps(state){
  return {
   isLoading: state.isLoading
  }
}
const ModalLoadingContainer= connect(mapStateToProps)(LoadingModal);
export default ModalLoadingContainer;
