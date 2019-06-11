import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {setIsLoading} from '../actions/index'

const mapDispatchToProps = {
    setIsLoading: setIsLoading
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);