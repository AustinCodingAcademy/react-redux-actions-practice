import {connect} from 'react-redux';
import CounterButton from '../components/CounterButton';
import {increaseCounter} from '../actions';
import {decreaseCounter} from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter:function() {
            let action = increaseCounter();
            dispatch(action);
        },
        decreaseCounter:function() {
            let action = decreaseCounter();
            dispatch(action);
        }
    }
}

const CounterButtonContainer = connect(mapDispatchToProps, CounterButton);
export default CounterButtonContainer;