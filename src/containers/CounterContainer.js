import Counter from '../components/Counter';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        count: state.currentCount
    }
}

export default connect(mapStateToProps)(Counter)
