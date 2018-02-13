import { connect } from 'react-redux';
import Counter from "../components/Counter";

function mapStateToProps(state) {
    return {
        currentCount: state.currentCount
    }
}

export default connect(mapStateToProps)(Counter);