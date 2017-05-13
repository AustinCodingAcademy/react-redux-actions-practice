import {connect} from "react-redux";
import  Modal from "../components/Modal";

const mapStateToProps = function (state) {
  return {
    isLoading: state.isLoading
  };
};
const ModalContainer = connect(mapStateToProps)(Modal);

export default ModalContainer;