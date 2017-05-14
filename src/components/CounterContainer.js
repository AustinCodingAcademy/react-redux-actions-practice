import {connect} from "react-redux";
import Counter from "./Counter";

const mapStateToProps = (state) => {
  console.log(state, state.specialText, " from CounterContainer")
  return {
    count: state.currentCount
  };
};

const CounterContainer = connect(
  mapStateToProps,
)(Counter);

export default CounterContainer;
