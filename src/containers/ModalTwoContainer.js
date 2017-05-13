import { connect } from "react-redux";
import Modal from "../components/Modal";
import setIsLoading from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        setIsLoading: (val) => dispatch(setIsLoading(val))
    }
}

const ModalTwoContainer = connect(null, mapDispatchToProps)(Modal);
export default ModalTwoContainer;