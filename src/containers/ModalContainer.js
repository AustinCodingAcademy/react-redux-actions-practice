import {connect} from 'react-redux';
import Modal from '../components/Modal';

function mapStateToProps(state){
    return {
        isLoading: state.isLoading
    }
}
export default connect(mapStateToProps)(Modal);