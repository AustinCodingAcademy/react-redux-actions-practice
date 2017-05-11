import {connect} from "react-redux";
import CounterButton from "./CounterButton";
import {
  increaseCounter,
  decreaseCounter
} from "../actions/index";

const mapStateToProps = (state) => {
  return {
    Counter: state.currentCount
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterButton);
