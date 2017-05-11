import {connect} from "react-redux";
import CounterButton from "./CounterButton";
import {increaseCounter} from "../actions/index";

const mapStateToProps = state => {
  return {
    Counter: state.currentCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => {
      dispatch(increaseCounter());
    }
  };
};

const CounterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,

)(CounterButton);
// Don't know if this needs to be CounterButton or Counter

export default CounterButtonContainer;
