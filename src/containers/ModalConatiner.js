import Modal from '../components/Modal';
import {connect} from 'react-redux';
import state from '../state';

const mapStateToProps = () => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Modal)
