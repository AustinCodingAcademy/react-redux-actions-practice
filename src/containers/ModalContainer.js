import Modal from '../components/Modal';
import {connect} from 'react-redux';
import {setIsLoading} from '../actions';

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = {
    setIsLoading: setIsLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
