import { connect } from 'react-redux'
import Counter from '../components/Counter'

const mapStatetoProps = (state) => {
    return {
        count: state.currentCount
    }
};

const CounterContainer = connect(mapStatetoProps)(Counter);

export default CounterContainer;
