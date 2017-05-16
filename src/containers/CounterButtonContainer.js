import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';
import { increaseCounter, decreaseCounter } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    increase: () => {
      const action = increaseCounter();
      dispatch(action);
    },
    decrease: () => {
      const action = decreaseCounter();
      dispatch(action);
    }
  }
}

const CounterButtonContainer = connect(null, mapDispatchToProps)(CounterButton);

export default CounterButtonContainer;
