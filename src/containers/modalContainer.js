import {connect} from 'react-redux';
import LoadingModal from '../components/Modal';
import {setIsLoading} from '../actions/index';

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = {
    setIsLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);