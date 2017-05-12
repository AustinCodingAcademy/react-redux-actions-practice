import {connect} from "react-redux";
import Counter from "./Counter";

const mapStateToProps = state => {
  return {
    count: state.currentCount
  };
};

const CounterContainer = connect(
  mapStateToProps,
)(Counter);

export default CounterContainer;
