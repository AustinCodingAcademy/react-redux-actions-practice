import {connect} from "react-redux";
import {setIsLoading} from "../actions"
import  Modal from "../components/Modal";


const mapStateToProps = function (state) {
  return {
    isLoading: state.isLoading
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoading: (val) => dispatch(setIsLoading(val))
    }
}


const ModalContainer = connect(null, mapDispatchToProps)(Modal);

export default ModalContainer