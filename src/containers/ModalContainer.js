import Modal from "../components/Modal";
import {connect} from "react-redux";
import {setIsLoading} from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        setIsLoading: function(value) {
            return dispatch(setIsLoading(value));
        }
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);