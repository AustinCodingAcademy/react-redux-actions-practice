import {connect} from "react-redux";
import CounterButton from "./CounterButton";
import {
  increaseCounter,
  decreaseCounter} from "../actions/index";

const mapStateToProps = (state) => {
  return {
    Counter: state.currentCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increase: () => {
      dispatch(increaseCounter());
      console.log("increase counter clicked");
    },
    decrease: () => {
      dispatch(decreaseCounter());
      console.log("decrease counter was clicked");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterButton);
