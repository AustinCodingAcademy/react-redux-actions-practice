import {connect} from 'react-redux';
import CounterButton from '../components/CounterButton';
import {increaseCounter} from '../actions/index';
import {decreaseCounter} from '../actions/index';

const mapDispatchToProps = {
    increase: increaseCounter,
    decrease: decreaseCounter
}

export default connect(null, mapDispatchToProps)(CounterButton);