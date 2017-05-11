import {connect} from "react-redux";
import CounterButton from "./CounterButton";

const mapStateToProps = state => {
  return {
    CounterIncrease: state.increase
  };
};

const mapDispatchToProps = state => {
  return {
    onClick: () => {
      dispatch(increaseCounter())
    }
  };
};

const CounterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps)
  (CounterButton);

export default CounterButtonContainer;
