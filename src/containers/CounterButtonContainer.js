import CounterButton from "../components/CounterButton";
import {connect} from 'react-redux';
import {increaseCounter, decreaseCounter} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    increase: function() {
      let action = increaseCounter();
      dispatch(action);
    },
    decrease: function() {
      let action = decreaseCounter();
      dispatch(action);
    }
  }
}

export default connect(null, mapDispatchToProps)(CounterButton);

