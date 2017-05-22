import {connect} from "react-redux";
import Counter from "../components/Counter";

const mapStateToProps = function (state) {
  return {
    count: state.currentCount
  };
};
const CounterContainer = connect(mapStateToProps)(Counter);

export default CounterContainer;