import {connect} from 'react-redux';
import Counter from '../components/Counter';

function mapStateToProps(state) {
    return {
        count:state.currentcount
    }
}

const CounterContainer = connect(mapStateToProps, Counter);
export default CounterContainer;