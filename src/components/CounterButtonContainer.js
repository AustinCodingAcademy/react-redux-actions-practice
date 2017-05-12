import {connect} from "react-redux";
import CounterButton from "./CounterButton";
import {increaseCounter} from "../actions";
import {decreaseCounter} from "../actions";

const mapStateToProps = state => {
  return {};
};

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

const CounterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButton);

export default CounterButtonContainer;
