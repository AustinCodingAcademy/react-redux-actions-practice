import { connect } from 'react-redux';
import ModalContainer from "../components/ModalContainer";

function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(ModalContainer);
