import {connect} from "react-redux";
import CounterButton from "./CounterButton";

// actions 
import {
  increaseCounter,
  decreaseCounter
} from "../actions";

const mapStateToProps = state => {
  return {
    countValue: state.currentCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => {
      dispatch(increaseCounter());
    },
    decrease: () => {
      dispatch(decreaseCounter());
    }
  };
};

const CounterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButton);

export default CounterButtonContainer;
