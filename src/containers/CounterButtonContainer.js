import {connect} from 'react-redux';
import CounterButton from "../components/CounterButton";
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(increaseCounter());
    },
    decrease: () => {
      dispatch(decreaseCounter());
    }
  };
};

const CounterButtonContainer = connect(null,mapDispatchToProps)(CounterButton);
export default CounterButtonContainer
