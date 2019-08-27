import Counter from '../components/Counter';
import {connect} from 'react-redux';
import state from '../state';

const mapStateToProps = () => {
    return {
        count: state.currentCount
    }
}

export default connect(mapStateToProps)(Counter)
