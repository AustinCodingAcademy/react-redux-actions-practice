import { connect } from "react-redux";
import Counter from "../components/Counter";

function mapStateToProps(state) {
  return {
    count: state.currentCount
  }

}

var otherFunction = connect(mapStateToProps, null);
export default otherFunction(Counter);