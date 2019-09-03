import {connect} from 'react-redux';
import LoadingModal from '../components/Modal';
import {isLoading} from '../actions/index';

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = {
    isLoading: isLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);