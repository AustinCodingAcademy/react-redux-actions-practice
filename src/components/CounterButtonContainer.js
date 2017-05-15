import {connect} from "react-redux";
import CounterButton from "./CounterButton";
import {
  increaseCounter
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
      console.log("Decrease counter");
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButton);
