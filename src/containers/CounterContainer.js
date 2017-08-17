import {increaseCounter, decreaseCounter} from "../actions";
import {connect} from "react-redux";
import Counter from "../components/Counter";

function mapStateToProps(state) {
  return {
    count: state.currentCount
  }
}

var otherFunction = connect(mapStateToProps);
var CounterContainer = otherFunction(Counter)

export default CounterContainer;
