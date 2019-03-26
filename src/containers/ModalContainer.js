import { connect } from 'react-redux';
import Modal from "../components/Modal";
import { setIsLoading } from "../actions";

const mapDispatchToProps = {
    setIsLoading: setIsLoading
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)